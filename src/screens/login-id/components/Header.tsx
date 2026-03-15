import ULThemeLogo from "@/components/ULThemeLogo";
import ULThemeTitle from "@/components/ULThemeTitle";

import { useLoginIdManager } from "../hooks/useLoginIdManager";

function Header() {
  const { texts, locales } = useLoginIdManager();

  // Use locale strings as fallback to SDK texts
  const logoAltText = texts?.logoAltText || locales?.heading?.logoAltText;

  return (
    <>
      <ULThemeLogo altText={logoAltText}></ULThemeLogo>
      <ULThemeTitle className="mt-3">{texts?.title || locales?.heading?.title}</ULThemeTitle>
    </>
  );
}

export default Header;
