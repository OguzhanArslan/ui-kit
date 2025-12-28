import type { SVGProps } from 'react';
const CalendarPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 11a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V17a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V12a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 3a1 1 0 0 0-2 0H6a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1a1 1 0 1 0-2 0zm10 4V6a1 1 0 0 0-1-1h-1a1 1 0 1 1-2 0H9a1 1 0 0 1-2 0H6a1 1 0 0 0-1 1v1zM5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9z"
      clipRule="evenodd"
    />
  </svg>
);
export default CalendarPlusIcon;
