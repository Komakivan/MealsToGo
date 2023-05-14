import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
