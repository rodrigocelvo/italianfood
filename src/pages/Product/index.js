import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

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

import { firestore, storage } from '../../services/firebase';

export function Product() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('10,00');
  const [time, setTime] = useState('10min');
  const [star, setStar] = useState('5');
  const [calory, setCalory] = useState('150kcal');
  const [photoPath, setPhotoPath] = useState('');
  const [category, setCategory] = useState('1');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleDelete() {
    firestore
      .collection('products')
      .doc(id)
      .delete()
      .then(() => {
        storage
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate('Home'));
      });

    navigation.navigate('Home');
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

  async function uploadImage(uri) {
    if (!uri) return;

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
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const fileName = new Date().getTime();

    const ref = storage
      .ref(`/products/${fileName}.png`)
    const snapshot = await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL()
      .then((url) => {
        return {
          getUrl: url,
          fullPath: ref.fullPath,
        }
      })
      .catch(() => {
        console.log('Erro ao fazer upload da imagem');
      })
  }

  async function handleAdd() {
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !price ||
      !time ||
      !star ||
      !calory ||
      !category
    ) {
      Alert.alert('Cadastro', 'Preencha todos os campos');
    }
    setIsLoading(true);

    const photo_url = await uploadImage(image);

    if (!photo_url) return;

    firestore
      .collection('products')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        price,
        time,
        star,
        calory,
        category,
        photo_url: photo_url.getUrl,
        photo_path: photo_url.fullPath,
      })
      .then(() => navigation.navigate('Home'))
      .catch(() => {
        Alert.alert('Cadastro', 'Erro ao cadastrar  o produto.');
      })
      .finally(() => setIsLoading(false));
  }


  async function handleEdit() {
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !price ||
      !time ||
      !star ||
      !calory ||
      !category
    ) {
      Alert.alert('Editar', 'Preencha todos os campos');
    }
    setIsLoading(true);

    const photo_url = await uploadImage(image);
    if (!photo_url) return;

    firestore
      .collection('products')
      .doc(id)
      .update({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        price,
        time,
        star,
        calory,
        category,
        photo_url: photo_url.getUrl,
        photo_path: photo_url.fullPath,
      })


      .then(() => {
        storage
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate('Home'));
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Editar', 'Erro ao editar o produto.');
      });
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
          setStar(product.star);
          setPrice(product.price);
          setCalory(product.calory);
          setCategory(product.category);
          setPhotoPath(product.photo_path);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <Container>
      <Header>
        <IconButton icon="chevron-left" onPress={handleGoBack} />
        {id && <IconButton icon="trash" onPress={handleDelete} />}
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
            icon="pencil-line"
            placeholder="Nome"
          />
        </InputGroup>

        <InputGroup>
          <InputGroupHeader>
            <Label>Descrição</Label>
            <MaxCharacters>
              {description.length} de 200 caracteres
            </MaxCharacters>
          </InputGroupHeader>
          <Input
            onChangeText={setDescription}
            value={description}
            type="secondary"
            icon="edit-2-line"
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
              icon="time-fill"
              placeholder="Tempo"
              color="#5499ee"
            />

            <StatsInput
              onChangeText={setStar}
              value={star}
              icon="star-fill"
              placeholder="Nota"
              color="#fabf49"
            />
            <StatsInput
              onChangeText={setCalory}
              value={calory}
              icon="fire-fill"
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
            icon="coins-line"
            placeholder="Preço do prato"
            keyboardType="numeric"
          />
        </InputGroup>


        <InputGroup>
          <Label>Categoria</Label>
          <CategorySelect setCategory={setCategory} categorySelected={category} />

        </InputGroup>
        {
          id
            ?
            <Button type="primary" onPress={handleEdit} title="Editar Prato" isLoading={isLoading} />
            :
            <Button onPress={handleAdd} title="Cadastrar Prato" isLoading={isLoading} />
        }
      </Form>
    </Container >
  );
}
