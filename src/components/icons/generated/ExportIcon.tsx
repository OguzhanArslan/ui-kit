import type { SVGProps } from 'react';
const ExportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.707 7.207a1 1 0 0 1-1.414 0L13 5.914V15.5a1 1 0 1 1-2 0V5.914L9.707 7.207a1 1 0 0 1-1.414-1.414l3.353-3.354a.5.5 0 0 1 .708 0l3.353 3.354a1 1 0 0 1 0 1.414"
    />
    <path
      fill="currentColor"
      d="M18 8.5a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2a1 1 0 1 1 0-2z"
    />
  </svg>
);
export default ExportIcon;
