import React from "react";

interface AlertCardProps {
  error: string;
  closeError: () => void;
}

const AlertCard: React.FC<AlertCardProps> = ({ error, closeError }) => {
  return (
    <div className="alert alert-error shadow-lg absolute w-1/2 right-0 left-40 bottom-10">
      <div>
        <svg
          onClick={() => closeError()}
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <div className="text-xs tracking-wider">Click to close</div>
          <div>{error}</div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
