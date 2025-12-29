import type { SVGProps } from 'react';
const VolumeXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 17 4.524 3.878c.973.834 2.476.142 2.476-1.14V4.262c0-1.281-1.503-1.973-2.476-1.139L8 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zm.74-8H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.74L13 18.652V5.348z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16.525 9.525a1 1 0 0 1 1.414 0L19 10.585l1.06-1.06a1 1 0 1 1 1.415 1.414L20.415 12l1.06 1.06a1 1 0 0 1-1.414 1.415L19 13.415l-1.06 1.06a1 1 0 0 1-1.415-1.414L17.585 12l-1.06-1.06a1 1 0 0 1 0-1.415"
    />
  </svg>
);
export default VolumeXIcon;
