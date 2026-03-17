import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MfaSmsEnrollmentForm from "./components/MfaSmsEnrollmentForm";
import { useMfaSmsEnrollmentManager } from "./hooks/useMfaSmsEnrollmentManager";

function MfaSmsEnrollmentScreen() {
  // Extracting attributes from hook made out of MfaSmsEnrollment instance of Auth0 React ACUL SDK
  const { mfaSmsEnrollment, texts, locales } = useMfaSmsEnrollmentManager();

  applyAuth0Theme(mfaSmsEnrollment);
  document.title = texts?.pageTitle || locales?.page?.title;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <MfaSmsEnrollmentForm />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default MfaSmsEnrollmentScreen;
