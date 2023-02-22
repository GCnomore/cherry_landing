import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ImportMerchant: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      {/* <div className="flex h-full flex-col justify-center px-8">
        <h2 className="text-xl mb-5 text-center font-bold">How to import store information</h2>
        <span className="text-base mb-5">1. Enter a store's URL or search in this browser</span>
        <span className="text-base mb-5">2. Move to the store's website</span>
        <span className="text-base mb-20">3. Click the button below to import store's information</span>
      </div> */}
      <div className="flex h-full flex-col px-8">
        <span className="text-base mb-2 flex flex-col items-center">
          <FontAwesomeIcon icon={faArrowUp} size={"2x"} />
          <p className="mt-2">1. Enter a store's URL or search in this browser.</p>
        </span>
        <span className="text-base mb-5">2. Move to the store's website</span>
        <span className="text-xl font-bold mt-auto mb-auto text-[#ccc]">How to import store information</span>
        <span className="text-base mt-auto mb-[4.25rem]">3. Click the button below to import store's information</span>
      </div>
      <div className="mt-[-4rem]">
        <FontAwesomeIcon icon={faArrowDown} size={"3x"} />
      </div>
    </div>
  );
};

export default ImportMerchant;
