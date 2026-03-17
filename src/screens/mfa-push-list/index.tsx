import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import MfaPushList from "./components/MfaPushList";
import MfaPushListHeader from "./components/MfaPushListHeader";
import { useMfaPushListManager } from "./hooks/useMfaPushListManager";

function MfaPushListScreen() {
  // Extracting attributes from hook made out of MfaPushList instance of Auth0 React ACUL SDK
  const { texts, locales, mfaPushListInstance } = useMfaPushListManager();

  applyAuth0Theme(mfaPushListInstance);
  document.title = texts?.pageTitle || locales.page.title;

  return (
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="p-0 pt-4 gap-0 w-(--prompt-width) min-h-(--prompt-min-height)">
        <MfaPushListHeader />
        <ULThemeSeparator className="grow-0" />
        <MfaPushList />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default MfaPushListScreen;
