import React from "react";

const AnimateBlob = () => {
  return (
    <div className="absolute top-0 left-1/2 w-[95%] md:w-4/5 h-[120vh] -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rounded-full blur-[100px] opacity-0 z-[-1] animate-floatUp" />
  );
};

export default AnimateBlob;
