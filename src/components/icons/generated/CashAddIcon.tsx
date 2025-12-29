import type { SVGProps } from 'react';
const CashAddIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8.5a1 1 0 0 1 1 1V11h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V13H9.5a1 1 0 1 1 0-2H11V9.5a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm16.17-1H19a1 1 0 0 1 1 1v.83A3 3 0 0 1 18.17 6M16.1 6H7.9A5.01 5.01 0 0 1 4 9.9v4.2A5.01 5.01 0 0 1 7.9 18h8.2a5.01 5.01 0 0 1 3.9-3.9V9.9A5.01 5.01 0 0 1 16.1 6M20 16.17A3 3 0 0 0 18.17 18H19a1 1 0 0 0 1-1zM5.83 18A3 3 0 0 0 4 16.17V17a1 1 0 0 0 1 1zM4 7.83A3 3 0 0 0 5.83 6H5a1 1 0 0 0-1 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default CashAddIcon;
