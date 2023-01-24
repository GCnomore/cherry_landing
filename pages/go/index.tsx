import dynamic from "next/dynamic";
import React from "react";
import { isSafari } from "react-device-detect";

const DeviceDetectModal = dynamic(
  () => import("./components/device_detect_modal/DeviceDetectModal"),
  { ssr: false }
);

const AlmostThere: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <h1 className="text-3xl mb-6">Setup Completed!</h1>
        <a
          href="https://api.cherrycart.app/unilink/setup_completed"
          className="hover:text-[#fff] visited:text-[#fff] text-[#fff] font-bold bg-[#da2e5e] rounded py-2 w-5/6 text-center no-underline"
        >
          Click to start CHERRY
        </a>
      </div>
      <DeviceDetectModal show={!isSafari} />
    </>
  );
};

export default AlmostThere;
