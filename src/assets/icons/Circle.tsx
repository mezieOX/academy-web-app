const Circle = ({ className }: { className: string }) => {
  return (
    <svg
      width={4}
      height={5}
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="0.5" width={4} height={4} rx={2} fill="#9E5CF2" />
    </svg>
  );
};

export default Circle;
