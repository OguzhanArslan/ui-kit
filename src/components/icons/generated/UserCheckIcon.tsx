import type { SVGProps } from 'react';
const UserCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M14.077 14c1 0 1.93.298 2.708.81.46.305 1.09.315 1.48-.075s.394-1.03-.048-1.361A6.9 6.9 0 0 0 14.077 12H9.923A6.923 6.923 0 0 0 3 18.923C3 20.07 3.93 21 5.077 21H12a1 1 0 1 0 0-2H5.077A.077.077 0 0 1 5 18.923 4.923 4.923 0 0 1 9.923 14z"
    />
    <path
      fill="currentColor"
      d="M22.002 15.66a1 1 0 1 0-1.503-1.32l-3.322 3.784-1.454-1.157a1 1 0 0 0-1.246 1.566l2.573 2.046a.5.5 0 0 0 .687-.061z"
    />
  </svg>
);
export default UserCheckIcon;
