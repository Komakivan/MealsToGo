import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const Restaurantcard = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardCover = styled(Card.Cover)`
  width: 100%;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RatingAndIcon = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionIcon = styled(View)`
  flex-direction: row;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
