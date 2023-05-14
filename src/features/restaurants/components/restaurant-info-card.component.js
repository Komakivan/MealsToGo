import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import {
  Restaurantcard,
  Icon,
  CardCover,
  Info,
  Rating,
  RatingAndIcon,
  SectionIcon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos,
    rating,
    openingHours,
    isOpenNow,
    address,
    isOpenTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <Restaurantcard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RatingAndIcon>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`start-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionIcon>
            {isOpenTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            {/* </Spacer> */}
            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
            {/* </Spacer> */}
          </SectionIcon>
        </RatingAndIcon>
        <Text variant="caption">{address}</Text>
      </Info>
    </Restaurantcard>
  );
};
