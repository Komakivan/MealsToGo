import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Restaurantcard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

const CardCover = styled(Card.Cover)`
  width: 100%;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = ["https://unsplash.com/photos/ywYmj3fiMhc"],
    rating = 3.5,
    openingHours,
    isOpenNow = true,
    address = "some rondom adress",
    isOpenTemporarily,
  } = restaurant;

  return (
    <Restaurantcard>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Restaurantcard>
  );
};
