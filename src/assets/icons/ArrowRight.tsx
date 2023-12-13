const ArrowRight = ({ className }: { className: string }) => {
  return (
    <svg
      width={12}
      height={19}
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5 18.5C2.07812 18.5 1.70312 18.3594 1.42188 18.0781C0.8125 17.5156 0.8125 16.5312 1.42188 15.9688L7.84375 9.5L1.42188 3.07812C0.8125 2.51562 0.8125 1.53125 1.42188 0.96875C1.98438 0.359375 2.96875 0.359375 3.53125 0.96875L11.0312 8.46875C11.6406 9.03125 11.6406 10.0156 11.0312 10.5781L3.53125 18.0781C3.25 18.3594 2.875 18.5 2.5 18.5Z"
        fill={"fill-current"}
      />
    </svg>
  );
};

export default ArrowRight;
