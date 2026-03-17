import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import MfaCountryCodesHeader from "./components/MfaCountryCodesHeader";
import MfaCountryCodesList from "./components/MfaCountryCodesList";
import { useMfaCountryCodesManager } from "./hooks/useMfaCountryCodesManager";

function MfaCountryCodesScreen() {
  // Extracting attributes from hook made out of MfaCountryCodes instance of Auth0 React ACUL SDK
  const { mfaCountryCodes, texts, locales } = useMfaCountryCodesManager();

  applyAuth0Theme(mfaCountryCodes);
  document.title = texts?.pageTitle || locales?.page?.title;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <MfaCountryCodesHeader />
        <MfaCountryCodesList />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default MfaCountryCodesScreen;
