import { Icon } from '@/domains/Icon';

export const Emoji = ({ width, height, color = '#94AEBA' }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 18"
    >
      <g>
        <path
          fill="#919EAB"
          d="M9 1.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zM9 3a6 6 0 100 12A6 6 0 009 3zm3.75 6.75a3.75 3.75 0 01-7.5 0h7.5z"
        ></path>
      </g>
    </svg>
  );
};
