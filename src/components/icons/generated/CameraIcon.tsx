import type { SVGProps } from 'react';
const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 5.5h2.5l.6-.8a3 3 0 0 1 2.4-1.2h3a3 3 0 0 1 2.4 1.2l.6.8H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3m9.3.4 1.2 1.6H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3.5l1.2-1.6a1 1 0 0 1 .8-.4h3a1 1 0 0 1 .8.4"
      clipRule="evenodd"
    />
  </svg>
);
export default CameraIcon;
