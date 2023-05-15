import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 100%;
`;

export const MapSearch = () => {
  const locationContext = useContext(LocationContext);
  const { keyword, search } = locationContext;
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Seach for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
