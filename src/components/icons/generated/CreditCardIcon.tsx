import type { SVGProps } from 'react';
const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v1H4V7a1 1 0 0 1 1-1m15 4v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7z"
      clipRule="evenodd"
    />
  </svg>
);
export default CreditCardIcon;
