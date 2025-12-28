import type { SVGProps } from 'react';
const FileMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M9.5 12a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.243a3 3 0 0 0-.879-2.122L16.88 2.88A3 3 0 0 0 14.757 2zm0 2h7v2.9A1.1 1.1 0 0 0 15.1 8H18v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 .828L17.172 6H16z"
      clipRule="evenodd"
    />
  </svg>
);
export default FileMinusIcon;
