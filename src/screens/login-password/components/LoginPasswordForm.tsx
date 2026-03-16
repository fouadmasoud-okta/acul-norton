import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

import { useErrors } from "@auth0/auth0-acul-react/login-password";
import type {
  ErrorItem,
  LoginPasswordOptions,
} from "@auth0/auth0-acul-react/types";

import Captcha from "@/components/Captcha/index";
import { ULThemeFloatingLabelField } from "@/components/form/ULThemeFloatingLabelField";
import { ULThemeFormMessage } from "@/components/form/ULThemeFormMessage";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { ULThemeButton } from "@/components/ULThemeButton";
import { ULThemeAlert, ULThemeAlertTitle } from "@/components/ULThemeError";
import ULThemeLink from "@/components/ULThemeLink";
import { ULThemePasswordField } from "@/components/ULThemePasswordField";
import { useCaptcha } from "@/hooks/useCaptcha";
import { cn } from "@/lib/utils";

import { useLoginPasswordManager } from "../hooks/useLoginPasswordManager";

function LoginPasswordForm() {
  const {
    texts,
    locales,
    data,
    captcha,
    editIdentifierLink,
    resetPasswordLink,
    passwordPolicy,
    isCaptchaAvailable,
    handleLoginPassword,
    handleSwitchConnection,
    phonePasswordlessConnection,
    emailPasswordlessConnection,
  } = useLoginPasswordManager();

  // Determine which passwordless button to show based on the entered identifier.
  // If they entered an email, offer phone as the alternative (and vice versa).
  // Fall back to Auth0's default connection names if not found in alternateConnections.
  const isEmail = data?.username?.includes("@") ?? false;
  const passwordlessButton = isEmail
    ? {
        connectionName: phonePasswordlessConnection?.name ?? "sms",
        label: locales?.loginPasswordForm?.loginWithPhone,
        icon: <Phone className="w-4 h-4 shrink-0" />,
      }
    : {
        connectionName: emailPasswordlessConnection?.name ?? "email",
        label: locales?.loginPasswordForm?.loginWithEmail,
        icon: <Mail className="w-4 h-4 shrink-0" />,
      };

  const form = useForm<LoginPasswordOptions>({
    defaultValues: {
      username: data?.username || "",
      password: "",
      captcha: "",
    },
    reValidateMode: "onBlur",
  });

  const {
    formState: { isSubmitting },
  } = form;

  // Use locales as fallback to SDK texts
  const captchaLabel = texts?.captchaCodePlaceholder
    ? `${texts.captchaCodePlaceholder}*`
    : locales?.loginPasswordForm?.captchaLabel;
  const passwordLabel =
    texts?.passwordPlaceholder || locales?.loginPasswordForm?.passwordLabel;
  const forgotPasswordLinkText =
    texts?.forgotPasswordText ||
    locales?.loginPasswordForm?.forgotPasswordLinkText;
  const continueButtonText =
    texts?.buttonText || locales?.loginPasswordForm?.continueButtonText;

  const { captchaConfig, captchaProps, captchaValue } = useCaptcha(
    captcha || undefined,
    captchaLabel
  );

  const { errors, hasError, dismiss } = useErrors();

  // Get field-specific SDK errors
  const passwordSDKError = errors.byField("password")[0]?.message;
  const captchaSDKError = errors.byField("captcha")[0]?.message;

  // Get general errors (not field-specific)
  const generalErrors: ErrorItem[] = errors
    .byType("auth0")
    .filter((err) => !err.field);

  // Proper submit handler with form data
  const onSubmit = async (data: LoginPasswordOptions) => {
    await handleLoginPassword({
      username: data.username,
      password: data.password,
      captcha: isCaptchaAvailable && captchaValue ? captchaValue : undefined,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Display general errors */}
        {hasError && generalErrors.length > 0 && (
          <div className="space-y-3 mb-4">
            {generalErrors.map((error) => (
              <ULThemeAlert
                key={error.id}
                variant="destructive"
                onDismiss={() => dismiss(error.id)}
              >
                <ULThemeAlertTitle>
                  {error.message || locales?.errors?.errorOccurred}
                </ULThemeAlertTitle>
              </ULThemeAlert>
            ))}
          </div>
        )}

        {/* Username Identifier input field with pre-filled value */}
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <FormItem>
              <ULThemeFloatingLabelField
                {...field}
                label={""}
                value={data?.username || ""}
                error={!!fieldState.error}
                readOnly={true}
                endAdornment={
                  <ULThemeLink href={editIdentifierLink || ""}>
                    {texts?.editEmailText ||
                      locales?.loginPasswordForm?.editText}
                  </ULThemeLink>
                }
                className="pr-4"
              />
              <ULThemeFormMessage hasFormError={!!fieldState.error} />
            </FormItem>
          )}
        />

        {/* Password input field */}
        <FormField
          control={form.control}
          name="password"
          rules={{
            required: locales?.errors?.passwordRequired,
            maxLength: {
              value: 200,
              message: locales?.errors?.max200CharsAllowed,
            },
            minLength: passwordPolicy?.minLength
              ? {
                  value: passwordPolicy.minLength,
                  message: `${locales?.errors?.passwordMinLength} ${passwordPolicy.minLength} ${locales?.errors?.charactersText}`,
                }
              : undefined,
          }}
          render={({ field, fieldState }) => (
            <FormItem>
              <ULThemePasswordField
                {...field}
                label={passwordLabel}
                autoFocus={true}
                autoComplete="current-password"
                error={!!fieldState.error || !!passwordSDKError}
              />
              <ULThemeFormMessage
                sdkError={passwordSDKError}
                hasFormError={!!fieldState.error}
              />
            </FormItem>
          )}
        />

        {/* Captcha Field */}
        {isCaptchaAvailable && captchaConfig && (
          <Captcha
            control={form.control}
            name="captcha"
            captcha={captchaConfig}
            {...captchaProps}
            sdkError={captchaSDKError}
            rules={{
              required: locales?.errors?.captchaCompletionRequired,
              maxLength: {
                value: 15,
                message: locales?.errors?.captchaTooLong,
              },
            }}
          />
        )}

        {resetPasswordLink && (
          <div className="mb-4 mt-2 text-left">
            <ULThemeLink href={resetPasswordLink}>
              {forgotPasswordLinkText}
            </ULThemeLink>
          </div>
        )}

        <ULThemeButton type="submit" className="w-full" disabled={isSubmitting}>
          {continueButtonText}
        </ULThemeButton>

        <div className="mt-3">
          <Button
            type="button"
            variant="outline"
            className={cn(
              "w-full h-[40px] gap-2 text-sm",
              "bg-white border-gray-mid cursor-pointer",
              "theme-universal:rounded-button",
              "theme-universal:border-(length:--ul-theme-border-button-border-weight)",
              "theme-universal:border-secondary-button-border",
              "theme-universal:hover:shadow-(--button-hover-shadow)",
              "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15"
            )}
            onClick={() =>
              handleSwitchConnection({
                connection: passwordlessButton.connectionName,
              })
            }
          >
            {passwordlessButton.icon}
            <span>{passwordlessButton.label}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginPasswordForm;
