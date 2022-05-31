import React, { useEffect, useState, Fragment } from 'react';
import {
  Container,
  OrderArea,
  Title,
  OrderName,
  OrderText,
  Image,
  Content,
  Status,
  StatusText,
  ScrollView,
} from './styles';

import { firestore } from '../../services/firebase';
import { useAuth } from '../../hooks/auth';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const subscribe = firestore
      .collection("orders")
      .where("user_id", "==", user.id)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setOrders(data);
      });

    return () => subscribe();
  }, []);




  return (
    <ScrollView>
      <Container>
        <Title>Meus Pedidos</Title>

        {
          orders.map((order) => (
            <Fragment key={order.id}>
              <OrderArea>
                <Image source={{ uri: order.image }} />
                <Content>
                  <OrderName>{order.name}</OrderName>
                  <OrderText>{order.sauce}</OrderText>

                  <Status>
                    <StatusText>{order.status}</StatusText>
                  </Status>
                </Content>
              </OrderArea>
            </Fragment>

          ))
        }

      </Container>
    </ScrollView>
  );
}
