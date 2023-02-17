import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ImportMerchant: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="flex h-full flex-col justify-center px-8">
        <h2 className="text-2xl mb-5 text-center">How to import store information</h2>
        <span className="text-lg mb-5">1. Enter a store's URL or search in this browser</span>
        <span className="text-lg mb-5">2. Move to the store's website</span>
        <span className="text-lg mb-20">3. Click the button below to import store's information</span>
      </div>
      <div className="mt-[-4rem]">
        <FontAwesomeIcon icon={faArrowDown} size={"3x"} />
      </div>
    </div>
  );
};

export default ImportMerchant;
