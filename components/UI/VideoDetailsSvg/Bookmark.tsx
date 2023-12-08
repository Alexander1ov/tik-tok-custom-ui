import { FC } from "react";

const Bookmark: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="533.333px"
      height="533.333px"
      viewBox="0 -10 533.333 533.333"
      fill="#fff"
      stroke="black"
      strokeWidth="20"
      strokeLinecap="round"
    >
      <path d="M100,0v533.333l166.667-166.666l166.667,166.666V0H100z" />
    </svg>
  );
};

export default Bookmark;
