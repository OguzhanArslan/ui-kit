import type { SVGProps } from 'react';
const DislikeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.516 16a.5.5 0 0 0 .044.111l2.612 4.822a2.037 2.037 0 0 0 3.828-.97V16h5.278a3 3 0 0 0 2.992-3.214l-.571-8A3 3 0 0 0 17.707 2H5.5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3zM11 19.963V14h7.278a1 1 0 0 0 .998-1.071l-.572-8A1 1 0 0 0 17.707 4H8.5v11.493l2.43 4.488q.012.018.033.019l.014-.002.012-.009.009-.012q.001 0 .002-.014M6.5 14h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1z"
      clipRule="evenodd"
    />
  </svg>
);
export default DislikeIcon;
