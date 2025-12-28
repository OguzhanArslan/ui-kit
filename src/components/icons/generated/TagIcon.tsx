import type { SVGProps } from 'react';
const TagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.391 8.098a1 1 0 0 0 1.414 1.415l.708-.708a1 1 0 0 0-1.415-1.414z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.074 13.973a3 3 0 0 1-.877-2.232l.27-7.31a1 1 0 0 1 .963-.963l7.31-.271a3 3 0 0 1 2.233.877l6.853 6.853a3 3 0 0 1 0 4.242l-5.657 5.657a3 3 0 0 1-4.242 0zm8.485-8.485 6.853 6.853a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414 0l-6.853-6.853a1 1 0 0 1-.292-.744l.236-6.383 6.383-.236a1 1 0 0 1 .744.292"
      clipRule="evenodd"
    />
  </svg>
);
export default TagIcon;
