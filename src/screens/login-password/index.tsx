import ULThemeCard from "@/components/ULThemeCard";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPasswordForm from "./components/LoginPasswordForm";
import { useLoginPasswordManager } from "./hooks/useLoginPasswordManager";
import screenLocales from "./locales/en.json";

function LoginPasswordScreen() {
  // Extracting attributes from hook made out of LoginPasswordInstance class of Auth0 React ACUL SDK
  const { loginPassword, texts, locales, alternateConnections } =
    useLoginPasswordManager();

  // Check whether separator component needs to be rendered based on other social connections
  const showSeparator = alternateConnections && alternateConnections.length > 0;

  // Use locale strings as fallback to SDK texts
  const separatorText = texts?.separatorText || locales?.page?.orText;
  document.title = texts?.pageTitle || locales?.page?.title;

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(loginPassword);

  // Extracting Tenant setting for social login component alignment on the layout via theme token
  const socialLoginAlignment = extractTokenValue(
    "--ul-theme-widget-social-buttons-layout"
  );

  const renderSocialLogins = (alignment: "top" | "bottom") => (
    <>
      {alignment === "bottom" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
      <AlternativeLogins />
      {alignment === "top" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
    </>
  );

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      {/* Left welcome panel - hidden on small screens */}
      <div className="hidden lg:flex flex-1 items-center px-16 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {screenLocales.welcomePanel.title}
          </h1>
          <p className="text-lg text-gray-600">
            {screenLocales.welcomePanel.description}
          </p>
        </div>
      </div>
      {/* Right login card panel */}
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
        <ULThemeCard className="w-full max-w-[400px] gap-0 py-6">
          <Header />
          {socialLoginAlignment === "top" && renderSocialLogins("top")}
          <LoginPasswordForm />
          <Footer />
          {socialLoginAlignment === "bottom" && renderSocialLogins("bottom")}
        </ULThemeCard>
      </div>
    </div>
  );
}

export default LoginPasswordScreen;
