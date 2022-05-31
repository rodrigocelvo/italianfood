import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import '../services/firebase';
import { auth, firestore } from '../services/firebase';


const USER_COLLECTION = '@italianfood:users';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signIn(email, password) {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe e-mail e a senha.');
    }

    setLoading(true);

    await auth
      .signInWithEmailAndPassword(email, password)
      .then(async (account) => {
        await firestore
          .collection('users')
          .get()
          .then(async (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.data().id === account.user.uid) {

                const userDate = {
                  id: account.user.uid,
                  name: doc.data().name,
                  isAdmin: doc.data().isAdmin,
                };

                AsyncStorage.setItem(
                  USER_COLLECTION,
                  JSON.stringify(userDate)
                );

                setUser(userDate);
              }
            })
          })
      })
      .catch((error) => {
        const { code } = error;

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'E-mail e/ou senha inválida.');
        } else {
          return Alert.alert('Login', 'Erro ao realizar login.');
        }
      })

      .finally(() => setLoading(false));
  }

  async function createAccount(email, password) {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe e-mail e a senha.');
    }

    setLoading(true);

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (account) => {
        await firestore
          .collection('users')
          .add({
            id: account.user.uid,
            name: 'Usuário',
            isAdmin: false,
          })

        const userData = {
          id: account.user.uid,
          name: 'Usuário',
          isAdmin: false,
        }

        AsyncStorage.setItem(
          USER_COLLECTION,
          JSON.stringify(userData)
        );

        setUser(userData);

      })
      .catch((error) => {
        const { code } = error;

        if (code === 'auth/email-already-exists') {
          return Alert.alert('Registro', 'E-mail já cadastrado.');
        }

        if (code === 'auth/invalid-password') {
          return Alert.alert('Registro', 'Senha muito curta digite no mínimo 6 caracteres.');
        }

        return Alert.alert('Registro', 'Erro ao tentar cadastrar');

      })
      .finally(() => setLoading(false));
  }


  async function signOut() {
    await auth.signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }


  async function loadUserStorageData() {
    setLoading(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      setUser(userData);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);


  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
