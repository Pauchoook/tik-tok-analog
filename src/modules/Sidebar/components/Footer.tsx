import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/footerList";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <FooterList list={footerList1} />
      <FooterList list={footerList2} />
      <FooterList list={footerList3} />
      <p className="text-gray-400 text-sm mt-5"></p>
    </div>
  );
};

export default Footer;
