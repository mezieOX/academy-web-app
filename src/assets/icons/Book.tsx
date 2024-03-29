const Book = ({ className }: { className?: string }) => {
  return (
    <svg
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 10.5V1.5C14 0.6875 13.3125 0 12.5 0H11V6C11 6.40625 10.5 6.625 10.1875 6.375L8.5 5L6.78125 6.40625C6.46875 6.65625 6 6.4375 6 6V0H3C1.3125 0 0 1.34375 0 3V13C0 14.6875 1.3125 16 3 16H13C13.5312 16 14 15.5625 14 15C14 14.6562 13.7812 14.3438 13.5 14.1562V11.625C13.7812 11.3438 14 10.9688 14 10.5ZM12 14H3C2.4375 14 2 13.5625 2 13C2 12.4688 2.4375 12 3 12H12V14Z"
        fill={"fill-current"}
        fillOpacity="0.25"
      />
    </svg>
  );
};

export default Book;
