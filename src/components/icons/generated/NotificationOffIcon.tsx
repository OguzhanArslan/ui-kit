import type { SVGProps } from 'react';
const NotificationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.811 7.226 3.793 5.207a1 1 0 0 1 1.414-1.414l15.5 15.5a1 1 0 0 1-1.414 1.414L17.586 19h-1.712a4.002 4.002 0 0 1-7.748 0H5.585a1.5 1.5 0 0 1-1.303-2.244L5 15.5v-5a7 7 0 0 1 .811-3.274M15.586 17h-9.14L7 16.031V10.5c0-.621.113-1.216.32-1.765zM12 20a2 2 0 0 1-1.732-1h3.464A2 2 0 0 1 12 20"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M17 13.372a.5.5 0 0 0 .154.361l1 .958a.5.5 0 0 0 .846-.362V10.5a7 7 0 0 0-6-6.93V3a1 1 0 1 0-2 0v.57a7 7 0 0 0-2.381.8c-.276.152-.312.523-.09.746l.756.755c.158.158.402.19.605.095A5 5 0 0 1 17 10.5z"
    />
  </svg>
);
export default NotificationOffIcon;
