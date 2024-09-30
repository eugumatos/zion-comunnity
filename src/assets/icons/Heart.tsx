import { Icon } from '@/domains/Icon';

export const Heart = ({ width, height, color = '#94AEBA' }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          fill={color}
          d="M12.82 5.58l-.82.822-.824-.824a5.375 5.375 0 10-7.601 7.602l7.895 7.895a.75.75 0 001.06 0l7.902-7.897a5.376 5.376 0 00-5.866-8.766 5.38 5.38 0 00-1.746 1.167v.001zm6.548 6.54L12 19.485 4.635 12.12a3.875 3.875 0 115.48-5.48l1.358 1.357a.75.75 0 001.073-.012L13.88 6.64a3.88 3.88 0 015.487 5.48h.001z"
        ></path>
      </g>
    </svg>
  );
};
