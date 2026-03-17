import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PhoneIdentifierEnrollmentForm from "./components/PhoneEnrollmentForm";
import { usePhoneIdentifierEnrollmentManager } from "./hooks/usePhoneIdentifierEnrollmentManager";

function PhoneIdentifierEnrollmentScreen() {
  // Extracting attributes from hook made out of PhoneIdentifierEnrollment instance of Auth0 React ACUL SDK
  const { phoneIdentifierEnrollment, texts, locales } =
    usePhoneIdentifierEnrollmentManager();

  applyAuth0Theme(phoneIdentifierEnrollment);
  document.title = texts?.pageTitle || locales.pageTitle;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <PhoneIdentifierEnrollmentForm />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default PhoneIdentifierEnrollmentScreen;
