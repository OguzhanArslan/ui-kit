import type { SVGProps } from 'react';
const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.516 8a.5.5 0 0 1 .044-.111l2.612-4.822a2.037 2.037 0 0 1 3.828.97V8h5.278a3 3 0 0 1 2.992 3.214l-.571 8A3 3 0 0 1 17.707 22H5.5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zM11 4.037V10h7.278a1 1 0 0 1 .998 1.071l-.572 8a1 1 0 0 1-.997.929H8.5V8.507l2.43-4.488A.04.04 0 0 1 10.964 4q.014.001.014.002l.012.009.009.012q.001 0 .002.014M6.5 10h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1z"
      clipRule="evenodd"
    />
  </svg>
);
export default LikeIcon;
