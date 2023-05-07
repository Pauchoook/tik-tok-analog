import React from "react";

interface FooterListProps {
  list: string[];
}

const FooterList: React.FC<FooterListProps> = ({ list }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {list.map((item) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover:underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default FooterList;
