import React from "react";

const AlmostThere: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <h1 className="text-3xl mb-6">Almost there!</h1>
      <a
        href="https://api.cherrycart.app/unilink/setup_completed"
        className="text-[#ffffff] font-bold bg-[#da2e5e] rounded py-2 w-5/6 text-center"
      >
        Click to Complete Setup
      </a>
    </div>
  );
};

export default AlmostThere;
