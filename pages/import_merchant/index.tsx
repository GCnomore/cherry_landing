import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ImportMerchant: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <span className="text-2xl mb-5">Go to a merchant website and</span>
      <span className="text-2xl mb-5">Click the button below</span>
      <span>
        <FontAwesomeIcon icon={faArrowDown} size={"3x"} />
      </span>
    </div>
  );
};

export default ImportMerchant;
