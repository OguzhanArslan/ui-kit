import type { SVGProps } from 'react';
const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 18a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2a1 1 0 1 0 2 0V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0z"
    />
    <path
      fill="currentColor"
      d="M12.957 15.707a1 1 0 0 1-1.414-1.414L12.836 13H3.25a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3.354 3.353a.5.5 0 0 1 0 .708z"
    />
  </svg>
);
export default LoginIcon;
