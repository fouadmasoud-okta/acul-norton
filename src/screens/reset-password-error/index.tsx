import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme";

import Header from "./components/Header";
import { useResetPasswordErrorManager } from "./hooks/resetPasswordErrorManager";

function ResetPasswordErrorScreen() {
  // Extracting attributes from hook made out of ResetPasswordErrorInstance class of Auth0 React SDK
  const { resetPasswordError, texts, locales } = useResetPasswordErrorManager();

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(resetPasswordError);
  document.title = texts?.pageTitle || locales.pageTitle;

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default ResetPasswordErrorScreen;
