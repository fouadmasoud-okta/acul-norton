import type { SVGProps } from "react";

export const WindowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 2.974L8.148 1.87v7.967H0V2.974z" fill="#F25022" />
    <path d="M9.019 1.745L20 0v9.837H9.019V1.745z" fill="#7FBA00" />
    <path d="M0 10.837h8.148v7.927L0 17.66v-6.823z" fill="#00A4EF" />
    <path d="M9.019 10.837H20V20L9.019 18.255v-7.418z" fill="#FFB900" />
  </svg>
);
