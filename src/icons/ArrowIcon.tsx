const ArrowIcon = ({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 35 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.04694 2.19318L17.0469 16.1932L32.0469 2.19318"
      stroke="#AFF2E9"
      strokeWidth="6"
    />
  </svg>
);
export default ArrowIcon;
