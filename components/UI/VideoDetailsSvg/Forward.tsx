import { FC } from "react";

const Forward: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.989,13.767a1.017,1.017,0,0,1,.073-1.779L23.5.5,18.073,22.713a1.031,1.031,0,0,1-.623.711,1.062,1.062,0,0,1-.951-.082Z M11.481,20.245,8.376,23.35a.513.513,0,0,1-.876-.363v-5.2L23.5.5"
        fill="#fff"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Forward;
