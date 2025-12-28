import type { SVGProps } from 'react';
const ImportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 13.086 1.293-1.293a1 1 0 0 1 1.414 1.414l-3.353 3.354a.5.5 0 0 1-.708 0l-3.353-3.354a1 1 0 1 1 1.414-1.414L11 13.086V3.5a1 1 0 1 1 2 0z"
    />
    <path
      fill="currentColor"
      d="M22 12.5a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a1 1 0 1 0 0-2H6a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4z"
    />
  </svg>
);
export default ImportIcon;
