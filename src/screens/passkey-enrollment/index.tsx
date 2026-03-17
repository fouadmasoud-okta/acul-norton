import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePasskeyEnrollmentManager } from "./hooks/usePasskeyEnrollmentManager";

function PasskeyEnrollmentScreen() {
  // Extracting attributes from hook made out of PasskeyEnrollmentInstance class of Auth0 React ACUL SDK
  const { texts, locales, passkeyEnrollmentInstance } =
    usePasskeyEnrollmentManager();

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(passkeyEnrollmentInstance);
  document.title = texts?.pageTitle || locales.page.title;

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <Details />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default PasskeyEnrollmentScreen;
