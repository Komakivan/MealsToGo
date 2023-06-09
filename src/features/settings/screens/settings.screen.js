import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, User } = useContext(AuthenticationContext);
  return (
    <SafeView>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          {User && <Text variant="label">{User.email}</Text>}
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeView>
  );
};
