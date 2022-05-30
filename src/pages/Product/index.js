import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { firestore, storage } from '../../services/firebase';

import {
  Container,
  Header,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupLine,
  InputGroupHeader,
  MaxCharacters
} from './styles';

import { IconButton } from '../../components/IconButton';
import { Photo } from '../../components/Photo';
import { Input } from '../../components/Input';
import { StatsInput } from '../../components/StatsInput';
import { CategorySelect } from '../../components/CategorySelect';
import { Button } from '../../components/Button';


export function Product() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0,00');
  const [sauce, setSauce] = useState('');
  const [time, setTime] = useState('');
  const [star, setStar] = useState('');
  const [calories, setCalories] = useState('');
  const [category, setCategory] = useState('1');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handlePicker() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  async function handleSubmit() {
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !price ||
      !sauce ||
      !time ||
      !star ||
      !calories ||
      !category
    ) {
      Alert.alert('Cadastro', 'Preencha todos os campos');
    }
    setIsLoading(true);


    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    const fileName = new Date().getTime();

    const ref = storage
      .ref(`/products/${fileName}.png`)
    const snapshot = await ref.put(blob);

    blob.close();

    const photo_url = await snapshot.ref.getDownloadURL();


    firestore
      .collection('products')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        price,
        sauce,
        time,
        star,
        calories,
        category,
        photo_url,
        photo_path: ref.fullPath,
      })
      .then(() => navigation.navigate('Home'))
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Cadastro', 'Erro ao cadastrar a pizza.');
      });
  }


  async function handleEdit() {
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !price ||
      !sauce ||
      !time ||
      !star ||
      !calories ||
      !category
    ) {
      Alert.alert('Cadastro', 'Preencha todos os campos');
    }
    setIsLoading(true);



    await firestore
      .collection('products')
      .doc(id)
      .update({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        price,
        sauce,
        time,
        star,
        calories,
        category,
        photo_url,
        snapshot,
        photo_path: reference.fullPath,
      })
      .then(() => navigation.navigate('Home'))
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Cadastro', 'Erro ao cadastrar a pizza.');
      });
  }

  async function handleDelete() {
    firestore
      .collection('products')
      .doc(id)
      .delete()
      .then(() => {
        // storage
        //   .ref(photoPath)
        //   .delete()
        //   .then(() => navigation.navigate('Home'));
      });

    navigation.navigate('Home');
  }


  useEffect(() => {
    if (id) {
      firestore
        .collection('products')
        .doc(id)
        .get()
        .then(async (response) => {
          const product = await response.data();
          setImage(product.photo_url);
          setName(product.name);
          setDescription(product.description);
          setTime(product.time);
          setSauce(product.sauce);
          setStar(product.star);
          setPrice(product.price);
          setCategory(product.category);
          setCalories(product.calories);


        })
        .catch((error) => console.log(error));
    }
  }, [id]);



  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={handleGoBack} />
        <IconButton icon="trash" onPress={handleDelete} />
      </Header>
      <Upload>
        <Photo uri={image} />
        <PickImageButton
          title="Carregar"
          type="primary"
          onPress={handlePicker}
        />
      </Upload>

      <Form>

        <InputGroup>
          <Label>Nome</Label>

          <Input
            onChangeText={setName}
            value={name}
            type="secondary"
            icon="pencil"
            placeholder="Nome"
          />
        </InputGroup>

        <InputGroup>
          <InputGroupHeader>
            <Label>Descrição</Label>
            <MaxCharacters>
              0 de 200 caracteres
            </MaxCharacters>
          </InputGroupHeader>
          <Input
            onChangeText={setDescription}
            value={description}
            type="secondary"
            icon="note"
            placeholder="Descrição do produto"
            multiline
            maxLength={200}
            style={{ height: 100 }}
          />
        </InputGroup>

        <InputGroup>
          <Label>Informações</Label>
          <InputGroupLine>

            <StatsInput
              onChangeText={setTime}
              value={time}
              icon="clock"
              placeholder="Tempo"
              color="#5499ee"
            />

            <StatsInput
              onChangeText={setStar}
              value={star}
              icon="star"
              placeholder="Nota"
              color="#fabf49"
            />
            <StatsInput
              onChangeText={setCalories}
              value={calories}
              icon="fire"
              placeholder="Kcal"
              color="#ec4a4e"
            />
          </InputGroupLine>
        </InputGroup>


        <InputGroup>
          <Label>Preço</Label>
          <Input
            onChangeText={setPrice}
            value={price}
            type="secondary"
            icon="wallet"
            placeholder="Preço do prato"
            keyboardType="numeric"
          />
        </InputGroup>

        <InputGroup>
          <Label>Molhos</Label>
          <Input
            onChangeText={setSauce}
            value={sauce}
            type="secondary"
            icon="tag"
            placeholder="Molhos separados por virgula"
          />
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <CategorySelect setCategory={setCategory} categorySelected={category} />

        </InputGroup>

        {
          id
            ?
            <Button type="primary" onPress={handleEdit} title="Editar Prato" />
            :
            <Button onPress={handleSubmit} title="Cadastrar Prato" />
        }

      </Form>
    </Container >
  );
}
