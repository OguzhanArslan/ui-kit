import type { SVGProps } from 'react';
const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.965a3 3 0 0 0-.879-2.121l-2.964-2.965A3 3 0 0 0 15.035 3zm9.035 2H15v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6h1a1 1 0 0 0 1-1V8.965a1 1 0 0 0-.293-.707l-2.965-2.965A1 1 0 0 0 15.035 5M15 19v-6H9v6zM9 5h4v2H9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SaveIcon;
