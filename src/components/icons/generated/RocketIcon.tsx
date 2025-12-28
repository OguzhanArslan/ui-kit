import type { SVGProps } from 'react';
const RocketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.371 9.404a1.5 1.5 0 1 0-2.12-2.121 1.5 1.5 0 0 0 2.12 2.121"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.73 4.79a2 2 0 0 1 2.028-2.028l3.397.048a6 6 0 0 1 4.158 1.757l3.713 3.713a5.54 5.54 0 0 1 5.045 1.51 1.455 1.455 0 0 1 0 2.057l-9.257 9.257a1.455 1.455 0 0 1-2.057 0 5.54 5.54 0 0 1-1.51-5.046l-3.713-3.713a6 6 0 0 1-1.756-4.157zm5.397.02-3.398-.048.048 3.397a4 4 0 0 0 1.172 2.772l4.554 4.555-.192.584a3.55 3.55 0 0 0 .504 3.204l8.426-8.426a3.55 3.55 0 0 0-3.203-.505l-.585.193-4.555-4.555A4 4 0 0 0 8.127 4.81"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M19.18 20.05c-.788.006-2.012-.074-2.978-.536-.499-.238-.504-.88-.113-1.271l2.121-2.121c.39-.39 1.033-.386 1.271.112.462.967.542 2.19.536 2.978a.835.835 0 0 1-.837.838"
    />
  </svg>
);
export default RocketIcon;
