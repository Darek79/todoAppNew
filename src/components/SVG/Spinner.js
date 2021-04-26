export const Spinner = ({
  clSvg = "spinner",
  clPath = "path",
}) => (
  <svg className={clSvg} viewBox='0 0 50 50'>
    <circle
      className={clPath}
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth={5}
    />
  </svg>
);
