import type { SVGProps } from 'react';
const FolderPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V16a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V11a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12 6-1.121-1.121A3 3 0 0 0 8.757 4H5a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm-.828 2L9.464 6.293A1 1 0 0 0 8.757 6H5a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default FolderPlusIcon;
