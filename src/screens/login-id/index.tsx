import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import ULThemeCard from "@/components/ULThemeCard";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginIdForm from "./components/LoginIdForm";
import { useLoginIdManager } from "./hooks/useLoginIdManager";

function LoginIdScreen() {
  // Extracting attributes from hook made out of LoginIdInstance class of Auth0 React ACUL SDK
  const { loginId, texts, locales, isPasskeyEnabled, alternateConnections } =
    useLoginIdManager();

  // Check whether separator component needs to be rendered based on passkey or other social connections
  const showSeparator =
    isPasskeyEnabled ||
    (alternateConnections && alternateConnections.length > 0);

  // Other Texts
  const separatorText = texts?.separatorText || locales?.page?.orText;
  document.title = texts?.pageTitle || locales?.page?.title;

  applyAuth0Theme(loginId);

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
      <BrandWelcomePanel />
      {/* Right login card panel */}
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
        <ULThemeCard className="w-full max-w-[400px] gap-0 py-6">
          <Header />
          {socialLoginAlignment === "top" && renderSocialLogins("top")}
          <LoginIdForm />
          <Footer />
          {socialLoginAlignment === "bottom" && renderSocialLogins("bottom")}
        </ULThemeCard>
      </div>
    </div>
  );
}

export default LoginIdScreen;
