import React from "react";

const Shimmer = () => {
  return (
    <div>
      <div className="w-3/12 h-7 bg-gradient-to-r mt-7 from-gray-300 via-gray-200 to-gray-300 p-1 rounded-3xl animate-pulse"></div>
      <div className="mt-10">
        <div className="flex items-center justify-around pb animate-pulse padding-b">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-28 w-28 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 p-1 rounded-full"
            />
          ))}
        </div>
        <div className="w-4/12 h-7 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 p-1 rounded-3xl animate-pulse"></div>
        <div className="flex items-center justify-around mt-10 pb animate-pulse">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-52 w-60 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 p-1 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
