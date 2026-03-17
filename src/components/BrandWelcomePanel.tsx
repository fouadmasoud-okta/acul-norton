import { useBrand } from "@/brands";

/**
 * Left-hand welcome panel rendered on both login-id and login-password screens.
 * Renders a text layout for GenDigital and an illustration layout for MoneyLion
 * (or any brand that provides an illustration).
 */
export function BrandWelcomePanel() {
  const { panel } = useBrand();

  if (panel.type === "illustration" && panel.illustration) {
    return (
      <div className="hidden lg:flex flex-1 items-center justify-center px-16 py-20">
        <div className="w-full max-w-sm">{panel.illustration}</div>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-1 items-center px-16 py-20">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{panel.title}</h1>
        <p className="text-lg text-gray-600">{panel.body}</p>
      </div>
    </div>
  );
}
