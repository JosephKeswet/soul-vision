import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
        <div className="lds-ring">
          <div className="w-16 h-16 m-2 border-4 border-white rounded-full animate-spin border-t-transparent border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
}
