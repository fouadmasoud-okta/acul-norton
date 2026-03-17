export function MoneyLionIllustration() {
  return (
    <svg
      viewBox="0 0 400 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-[360px]"
    >
      {/* Concentric background rings */}
      <circle cx="200" cy="210" r="185" stroke="#C8F4EE" strokeWidth="1" />
      <circle cx="200" cy="210" r="155" stroke="#C8F4EE" strokeWidth="1" />
      <circle cx="200" cy="210" r="125" stroke="#C8F4EE" strokeWidth="1" />
      <circle cx="200" cy="210" r="95" stroke="#C8F4EE" strokeWidth="1.5" />
      <circle cx="200" cy="210" r="65" fill="#E6FAF7" />

      {/* Phone frame */}
      <rect
        x="152"
        y="110"
        width="96"
        height="170"
        rx="14"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      {/* Phone screen */}
      <rect x="160" y="124" width="80" height="130" rx="6" fill="#4ED8C4" />
      {/* Phone top notch */}
      <rect x="184" y="118" width="32" height="5" rx="2.5" fill="#D1D5DB" />
      {/* Phone home indicator */}
      <rect x="183" y="284" width="34" height="4" rx="2" fill="#D1D5DB" />

      {/* Screen UI — card */}
      <rect
        x="168"
        y="140"
        width="64"
        height="34"
        rx="5"
        fill="white"
        fillOpacity="0.2"
      />
      {/* Screen UI — text lines */}
      <rect
        x="168"
        y="147"
        width="44"
        height="4"
        rx="2"
        fill="white"
        fillOpacity="0.7"
      />
      <rect
        x="168"
        y="157"
        width="32"
        height="4"
        rx="2"
        fill="white"
        fillOpacity="0.5"
      />
      {/* Screen UI — amount */}
      <rect
        x="168"
        y="186"
        width="64"
        height="10"
        rx="3"
        fill="white"
        fillOpacity="0.3"
      />
      {/* Screen UI — bottom row dots */}
      <circle cx="176" cy="222" r="5" fill="white" fillOpacity="0.4" />
      <circle cx="192" cy="222" r="5" fill="white" fillOpacity="0.4" />
      <circle cx="208" cy="222" r="5" fill="white" fillOpacity="0.4" />
      <circle cx="224" cy="222" r="5" fill="white" fillOpacity="0.4" />

      {/* Decorative bubble — top left, purple */}
      <circle cx="118" cy="148" r="22" fill="#C77DFF" fillOpacity="0.12" />
      <circle cx="118" cy="148" r="12" fill="#C77DFF" fillOpacity="0.22" />
      <circle cx="118" cy="148" r="5" fill="#C77DFF" fillOpacity="0.5" />

      {/* Decorative bubble — right, teal */}
      <circle cx="290" cy="195" r="26" fill="#4ED8C4" fillOpacity="0.12" />
      <circle cx="290" cy="195" r="14" fill="#4ED8C4" fillOpacity="0.22" />
      <circle cx="290" cy="195" r="6" fill="#4ED8C4" fillOpacity="0.5" />

      {/* Decorative bubble — bottom left, teal */}
      <circle cx="130" cy="290" r="16" fill="#4ED8C4" fillOpacity="0.15" />
      <circle cx="130" cy="290" r="8" fill="#4ED8C4" fillOpacity="0.28" />

      {/* Decorative bubble — top right, purple */}
      <circle cx="278" cy="130" r="14" fill="#C77DFF" fillOpacity="0.15" />
      <circle cx="278" cy="130" r="7" fill="#C77DFF" fillOpacity="0.28" />

      {/* Decorative bubble — bottom right, purple */}
      <circle cx="284" cy="298" r="18" fill="#C77DFF" fillOpacity="0.12" />
      <circle cx="284" cy="298" r="9" fill="#C77DFF" fillOpacity="0.22" />

      {/* Small accent dots */}
      <circle cx="160" cy="96" r="5" fill="#4ED8C4" />
      <circle cx="248" cy="330" r="5" fill="#C77DFF" />
      <circle cx="112" cy="220" r="3.5" fill="#4ED8C4" fillOpacity="0.6" />
      <circle cx="295" cy="255" r="3.5" fill="#C77DFF" fillOpacity="0.6" />
      <circle cx="240" cy="92" r="3" fill="#C77DFF" fillOpacity="0.5" />
      <circle cx="152" cy="340" r="3" fill="#4ED8C4" fillOpacity="0.5" />
    </svg>
  );
}
