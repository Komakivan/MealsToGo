import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
      <AccountContainer>
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
            onChangeText={(pass1) => setPassword(pass1)}
          />
        </Spacer>
        <Spacer size="medium">
          <AuthInput
            label="Reapeat password"
            // mode="outlined"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass2) => setRepeatPassword(pass2)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <Spacer size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatPassword)}
            >
              Register
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
