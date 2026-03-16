import {
  useLoginPassword,
  useScreen,
  useTransaction,
} from "@auth0/auth0-acul-react/login-password";
import type {
  Connection,
  EnterpriseConnection,
  FederatedLoginOptions,
  LoginPasswordMembers,
  LoginPasswordOptions,
  ScreenMembersOnLoginPassword,
  SwitchConnectionOptionsLoginPassword,
  TransactionMembersOnLoginPassword,
} from "@auth0/auth0-acul-react/types";

import locales from "@/screens/login-password/locales/en.json";
import { executeSafely } from "@/utils/helpers/executeSafely";

export const useLoginPasswordManager = () => {
  const loginPassword: LoginPasswordMembers = useLoginPassword();
  const screen: ScreenMembersOnLoginPassword = useScreen();
  const transaction: TransactionMembersOnLoginPassword = useTransaction();

  const { alternateConnections } = transaction;

  type AnyConnection = Connection | EnterpriseConnection;

  const phonePasswordlessConnection =
    (alternateConnections as AnyConnection[] | null)?.find(
      (c) => c.strategy === "sms"
    ) ?? null;

  const emailPasswordlessConnection =
    (alternateConnections as AnyConnection[] | null)?.find(
      (c) => c.strategy === "email"
    ) ?? null;

  const {
    isCaptchaAvailable,
    texts,
    captcha,
    signupLink,
    resetPasswordLink,
    editIdentifierLink,
    data,
  } = screen;

  const { isSignupEnabled, isForgotPasswordEnabled } = transaction;

  const handleLoginPassword = async (
    payload: LoginPasswordOptions
  ): Promise<void> => {
    // Clean and prepare data
    const options: LoginPasswordOptions = {
      username: payload?.username.trim(),
      password: payload?.password?.trim(),
    };

    if (screen.isCaptchaAvailable && payload?.captcha?.trim()) {
      options.captcha = payload?.captcha.trim();
    }

    const logOptions = {
      ...options,
      password: "[REDACTED]",
    };

    executeSafely(
      `Perform login password operation with options: ${JSON.stringify(logOptions)}`,
      () => loginPassword.login(options)
    );
  };

  const handleFederatedLogin = async (payload: FederatedLoginOptions) => {
    executeSafely(
      `Perform federated login with connection: ${payload.connection}`,
      () => loginPassword.federatedLogin(payload)
    );
  };

  const handleSwitchConnection = async (
    payload: SwitchConnectionOptionsLoginPassword
  ) => {
    executeSafely(
      `Switch connection to: ${payload.connection}`,
      () => loginPassword.switchConnection(payload)
    );
  };

  return {
    loginPassword,
    texts,
    locales,
    isSignupEnabled,
    isForgotPasswordEnabled,
    isCaptchaAvailable,
    alternateConnections,
    captcha,
    signupLink,
    resetPasswordLink,
    editIdentifierLink,
    data,
    errors: transaction.errors,
    handleLoginPassword,
    handleFederatedLogin,
    handleSwitchConnection,
    phonePasswordlessConnection,
    emailPasswordlessConnection,
    passwordPolicy: transaction.passwordPolicy,
  };
};
