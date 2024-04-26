import React from "react";

export default function Subscribe() {
  return (
    <div className="h-120 w-auto flex justify-center items-center flex-col p-10 bg-white">
      <p className="text-2xl md:text-4xl text-[#416392]">Subscribe to our emails</p>
      <div className="flex flex-row">
      <input
        type="text"
        className="h-12 w-48 md:w-96 rounded-md px-4 my-2 border border-[#416392]"
        placeholder="Enter your email"
      />
        <button className="h-12 mt-2 px-6 py-2 bg-[#416392] text-white rounded-md ml-2">
          Send
        </button>
      </div>

      <p className="text-lg mt-4 text-[#416392]">
        Dive into the realm of cutting-edge e-gadgets as we unveil our latest arrivals, meticulously crafted to elevate your tech experience.
      </p>
    </div>
  );
}
