import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/typography.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="medium">
          <AuthInput
            label="E-mail"
            // mode="outlined"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Spacer>
        <Spacer size="medium">
          <AuthInput
            label="password"
            // mode="outlined"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass) => setPassword(pass)}
          />
        </Spacer>
        {!isLoading ? (
          <Spacer size="large">
            <AuthButton
              icon="account-lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          </Spacer>
        ) : (
          <Spacer size="medium">
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          </Spacer>
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="arrow-left"
          mode="contained"
          onPress={() => navigation.navigate("Main")}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
