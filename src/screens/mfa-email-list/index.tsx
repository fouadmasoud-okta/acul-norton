import ULThemeCard from "@/components/ULThemeCard";
import { BrandWelcomePanel } from "@/components/BrandWelcomePanel";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { applyAuth0Theme } from "@/utils/theme";

import MFAEmailListHeader from "./components/MFAEmailListHeader";
import MFAEmailListOptions from "./components/MFAEmailListOptions";
import { useMfaEmailListManager } from "./hooks/useMFAEmailListManager";

function MFAEmailList() {
  // Extracting attributes from hook made out of MFAEmailListInstance class of Auth0 React SDK
  const { mfaEmailList, texts, locales } = useMfaEmailListManager();

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(mfaEmailList);
  document.title = texts?.pageTitle || locales.pageTitle;

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <div className="theme-universal flex min-h-screen bg-(color:--ul-theme-page-bg-background-color) bg-(image:--ul-theme-page-bg-background-image-url)">
      <BrandWelcomePanel />
      <div className="flex items-center justify-center px-10 py-20 w-full lg:w-auto lg:min-w-[480px]">
      <ULThemeCard className="p-0 pt-4 gap-0 w-(--prompt-width) min-h-(--prompt-min-height)">
        <MFAEmailListHeader />
        <ULThemeSeparator className="grow-0" />
        <MFAEmailListOptions />
      </ULThemeCard>
      </div>
    </div>
  );
}

export default MFAEmailList;
