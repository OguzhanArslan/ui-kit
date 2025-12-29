import type { SVGProps } from 'react';
const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M7.5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-1v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h1zm2 1h3a4 4 0 0 1 4 4v4h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2zm-5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default CopyIcon;
