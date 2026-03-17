import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PhoneIdentifierChallengeForm from "./components/PhoneIdentifierForm";
import { usePhoneIdentifierChallengeManager } from "./hooks/usePhoneIdentifierChallengeManager";

function PhoneIdentifierChallengeScreen() {
  // Extracting attributes from hook made out of PhoneIdentifierChallenge instance of Auth0 React ACUL SDK
  const { phoneIdentifierChallenge, texts, locales } =
    usePhoneIdentifierChallengeManager();

  applyAuth0Theme(phoneIdentifierChallenge);
  document.title = texts?.pageTitle || locales.pageTitle;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <Header />
        <PhoneIdentifierChallengeForm />
        <Footer />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default PhoneIdentifierChallengeScreen;
