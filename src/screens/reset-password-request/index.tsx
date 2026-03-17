import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ResetPasswordRequestForm from "./components/ResetPasswordRequestForm";
import { useResetPasswordRequestManager } from "./hooks/resetPasswordRequestManager";

function ResetPasswordRequestScreen() {
  // Extracting attributes from hook made out of ResetPasswordRequestInstance class of Auth0 React SDK
  const { resetPasswordRequest, texts, locales } =
    useResetPasswordRequestManager();

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(resetPasswordRequest);
  // Use locale strings with fallback to SDK texts
  document.title = texts?.pageTitle || locales.pageTitle;

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <ResetPasswordRequestForm />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default ResetPasswordRequestScreen;
