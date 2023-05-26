import React from "react";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

export const NoResult = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <BsEmojiSmileUpsideDownFill fontSize={34} className="text-red-500" />
      <h3 className="text-center text-2xl font-bold mt-2">Nothing was found for your query</h3>
    </div>
  );
};
