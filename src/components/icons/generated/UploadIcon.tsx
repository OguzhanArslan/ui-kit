import type { SVGProps } from 'react';
const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.543 7.707a1 1 0 0 0 1.414 0l1.293-1.293V16a1 1 0 1 0 2 0V6.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3.353-3.354a.5.5 0 0 0-.708 0L8.543 6.293a1 1 0 0 0 0 1.414"
    />
    <path
      fill="currentColor"
      d="M4 14a1 1 0 0 1 1 1v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2a1 1 0 0 1 1-1"
    />
  </svg>
);
export default UploadIcon;
