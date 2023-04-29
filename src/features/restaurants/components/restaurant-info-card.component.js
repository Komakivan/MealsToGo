import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Adress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Restaurantcard = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
`;

const CardCover = styled(Card.Cover)`
  width: 100%;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RatingAndIcon = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionIcon = styled(View)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = ["https://picsum.photos/150"],
    rating = 3.5,
    openingHours,
    isOpenNow = true,
    address = "some rondom adress",
    isOpenTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <Restaurantcard>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingAndIcon>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionIcon>
            {isOpenTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </SectionIcon>
        </RatingAndIcon>
        <Adress>{address}</Adress>
      </Info>
    </Restaurantcard>
  );
};
