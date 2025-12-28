import type { SVGProps } from 'react';
const MessageFilledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 12a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 14.5a3 3 0 0 0 3 3h3v2.696a1 1 0 0 0 1.53.848L15.2 17.5H19a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm8 3.892V15.5H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-4.374z"
      clipRule="evenodd"
    />
  </svg>
);
export default MessageFilledIcon;
