import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupPasswordForm from "./components/SignupPasswordForm";
import { useSignupPasswordManager } from "./hooks/useSignupPasswordManager";

function SignupPasswordScreen() {
  // Extracting attributes from hook made out of SignupPasswordInstance class of Auth0 React ACUL SDK
  const { signupPassword, texts, locales } = useSignupPasswordManager();

  document.title = texts?.pageTitle || locales.page.title;

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(signupPassword);

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <SignupPasswordForm />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default SignupPasswordScreen;
