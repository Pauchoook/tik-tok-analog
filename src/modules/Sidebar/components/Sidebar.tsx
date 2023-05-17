import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { GoogleLogin } from "@react-oauth/google";
import Discover from "./Discover";
import { SuggestedAccounts } from "./SuggestedAccounts";
import Footer from "./Footer";

export const Sidebar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(true);
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";
  const userProfile = false;

  return (
    <div>
      <div onClick={() => setIsShowSidebar(!isShowSidebar)} className="block xl:hidden m-2 ml-4 mt-3 text-xl">
        {isShowSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {isShowSidebar && (
        <div className="w-20 xl:w-400 flex flex-col justify-center mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl text-center">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400 mb-3">Log in to like and comment on videos</p>
              <div className="pr-4">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};
