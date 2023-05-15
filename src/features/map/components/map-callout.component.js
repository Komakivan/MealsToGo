import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const Mapcallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
