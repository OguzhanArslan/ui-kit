import type { SVGProps } from 'react';
const BookmarkMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M9.5 9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v15.414c0 1.252-1.442 1.953-2.427 1.18l-4.418-3.473a.25.25 0 0 0-.31 0l-4.418 3.472c-.984.774-2.427.073-2.427-1.18zm3-1h8a1 1 0 0 1 1 1v14.385l-3.61-2.836a2.25 2.25 0 0 0-2.78 0L7 19.385V5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default BookmarkMinusIcon;
