import React from "react";

const PrimaryNavigationItem = ({ name, label, handleActivePanel }) => {
  return (
    <div
      onClick={() => handleActivePanel({ label, name })}
      data-name={name}
      className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark"
    >
      <div className="flex items-center justify-between -mx-1">
        <div className="px-1">
          <h2 className="font-medium u__p text-inherit">{label}</h2>
        </div>
        <div className="px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavigationItem;
