import { Icon } from '@/domains/Icon';

export const Comment = ({ width, height, color = '#94AEBA' }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 24"
    >
      <g>
        <path
          fill={color}
          d="M5.406 18a3.25 3.25 0 01-3.25-3.25v-8.5A3.25 3.25 0 015.406 3h13.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25H13.17l-5.013 3.75a1.25 1.25 0 01-1.999-1V18h-.75zm7.265-1.5h6.236a1.75 1.75 0 001.75-1.75v-8.5a1.75 1.75 0 00-1.75-1.75h-13.5a1.75 1.75 0 00-1.75 1.75v8.5c0 .966.783 1.75 1.75 1.75h2.248v3.75l5.016-3.75z"
        ></path>
      </g>
    </svg>
  );
};
