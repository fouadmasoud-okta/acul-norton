import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import MfaSmsList from "./components/MfaSmsList";
import MfaSmsListHeader from "./components/MfaSmsListHeader";
import { useMfaSmsListManager } from "./hooks/useMfaSmsListManager";

function MfaSmsListScreen() {
  // Extracting attributes from hook made out of MfaSmsList instance of Auth0 React ACUL SDK
  const { mfasmsList, texts, locales } = useMfaSmsListManager();

  applyAuth0Theme(mfasmsList);
  document.title = texts?.pageTitle || locales?.page?.title;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="w-full max-w-[400px] gap-0">
        <MfaSmsListHeader />
        <MfaSmsList />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default MfaSmsListScreen;
