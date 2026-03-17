import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import ULThemeCard from "@/components/ULThemeCard";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupIdForm from "./components/SignupIdForm";
import { useSignupIdManager } from "./hooks/useSignupIdManager";

function SignupIdScreen() {
  // Extracting attributes from hook made out of SignupIdInstance class of Auth0 React ACUL SDK
  const { signupId, texts, alternateConnections, locales } =
    useSignupIdManager();

  const showSeparator = alternateConnections && alternateConnections.length > 0;

  const separatorText = texts?.separatorText || locales.page.separator;
  document.title = texts?.pageTitle || locales.page.title;

  applyAuth0Theme(signupId);

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
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
        <ULThemeCard className="w-full max-w-[400px] gap-0 py-6">
          <Header />
          {socialLoginAlignment === "top" && renderSocialLogins("top")}
          <SignupIdForm />
          <Footer />
          {socialLoginAlignment === "bottom" && renderSocialLogins("bottom")}
        </ULThemeCard>
      </div>
    </div>
  );
}

export default SignupIdScreen;
