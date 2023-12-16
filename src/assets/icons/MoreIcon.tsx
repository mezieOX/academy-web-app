const MoreIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width={18}
      height={15}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.09375 0.71875C1.3125 0.28125 1.75 0 2.25 0H15.75C16.2188 0 16.6562 0.28125 16.875 0.71875C17.0625 1.15625 17 1.6875 16.6875 2.0625L11 9.03125V13C11 13.4062 10.7812 13.75 10.4375 13.9062C10.0938 14.0625 9.6875 14.0312 9.375 13.8125L7.375 12.3125C7.125 12.125 7 11.8438 7 11.5V9.03125L1.28125 2.0625C0.96875 1.6875 0.90625 1.15625 1.09375 0.71875Z"
        fill={"fill-current"}
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default MoreIcon;
