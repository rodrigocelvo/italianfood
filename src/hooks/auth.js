import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_COLLECTION = '@gopizza:users';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe e-mail e a senha.');
    }
    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            const { name, isAdmin } = profile.data();

            if (profile.exists) {
              const userDate = {
                id: account.user.uid,
                name,
                isAdmin,
              };

              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userDate)
              );
              setUser(userDate);
            }
          })
          .catch(() =>
            Alert.alert(
              'Login',
              'Não foi possível buscar os dados de perfil do usuário.'
            )
          );
      })
      .catch((error) => {
        const { code } = error;

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'E-mail e/ou senha inválida.');
        } else {
          return Alert.alert('Login', 'Erro ao realizar login.');
        }
      })
      .finally(() => setIsLogging(false));
  }

  async function loadUserStorageData() {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      setUser(userData);
    }

    setIsLogging(false);
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  async function forgotPassword(email) {
    if (!email) {
      return Alert.alert('Esqueci minha senha', 'Informe o e-mail.');
    }

    setIsLogging(true);

    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Esqueci minha senha', 'Um e-mail foi enviado.'))
      .catch((error) =>
        Alert.alert('Esqueci minha senha', 'Erro ao enviar e-mail.')
      )
      .finally(() => setIsLogging(false));
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, forgotPassword, isLogging }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
