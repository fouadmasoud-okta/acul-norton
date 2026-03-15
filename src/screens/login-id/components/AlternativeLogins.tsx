import { Button } from "@/components/ui/button";
import ULThemeSocialProviderButton from "@/components/ULThemeSocialProviderButton";
import { PasskeyIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { SocialConnection } from "@/utils/helpers/socialUtils";
import { getSocialProviderDetails } from "@/utils/helpers/socialUtils";

import { useLoginIdManager } from "../hooks/useLoginIdManager";

const AlternativeLogins = () => {
  const {
    texts,
    locales,
    isPasskeyEnabled,
    showPasskeyAutofill,
    alternateConnections,
    handleFederatedLogin,
    handlePasskeyLogin,
  } = useLoginIdManager();

  const passkeyButtonText =
    texts?.passkeyButtonText || locales?.alternativeLogins?.passkeyButtonText;

  const handleConnectionLogin = (connection: SocialConnection) => {
    handleFederatedLogin({
      connection: connection.name,
      ...(connection.metadata || {}),
    });
  };

  const showPasskeyButton = isPasskeyEnabled && !showPasskeyAutofill;
  const hasSocialConnections =
    alternateConnections && alternateConnections.length > 0;

  if (!showPasskeyButton && !hasSocialConnections) return null;

  return (
    <div className="space-y-3 mt-2">
      {showPasskeyButton && (
        <ULThemeSocialProviderButton
          key="passkey"
          displayName={locales?.alternativeLogins?.passkeyLabel ?? "Passkey"}
          buttonText={passkeyButtonText ?? "Continue with a passkey"}
          iconComponent={<PasskeyIcon />}
          onClick={() => handlePasskeyLogin()}
        />
      )}
      {hasSocialConnections && (
        <div className="flex gap-3 w-full max-w-[320px]">
          {alternateConnections!.map((connection: SocialConnection) => {
            if (!connection?.name) return null;
            const { displayName, iconComponent } =
              getSocialProviderDetails(connection);
            return (
              <Button
                key={connection.name}
                variant="outline"
                className={cn(
                  "flex-1 h-[52px]",
                  "bg-white border-gray-mid cursor-pointer",
                  "theme-universal:rounded-button",
                  "theme-universal:border-(length:--ul-theme-border-button-border-weight)",
                  "theme-universal:border-secondary-button-border",
                  "theme-universal:hover:shadow-(--button-hover-shadow)",
                  "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15"
                )}
                onClick={() => handleConnectionLogin(connection)}
                aria-label={`Continue with ${displayName}`}
                title={`Continue with ${displayName}`}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {iconComponent}
                </span>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AlternativeLogins;
