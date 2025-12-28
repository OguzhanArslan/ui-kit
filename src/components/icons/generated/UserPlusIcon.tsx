import type { SVGProps } from 'react';
const UserPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15.669 14.263A4.9 4.9 0 0 0 14.077 14H9.923A4.923 4.923 0 0 0 5 18.923c0 .043.034.077.077.077H13a1 1 0 1 1 0 2H5.077A2.077 2.077 0 0 1 3 18.923C3 15.1 6.1 12 9.923 12h4.154c.93 0 1.816.183 2.626.516.484.198.652.774.418 1.241-.258.518-.905.693-1.452.506M18.5 15a1 1 0 0 1 1 1v1.5H21a1 1 0 1 1 0 2h-1.5V21a1 1 0 1 1-2 0v-1.5H16a1 1 0 1 1 0-2h1.5V16a1 1 0 0 1 1-1"
    />
  </svg>
);
export default UserPlusIcon;
