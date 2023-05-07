import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import logo from "../../../../public/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../helpers/createOrGetUser";
import useUserStore from "@/store/userStore";

export const Navbar = () => {
  const { user, addUser, removeUser } = useUserStore();

  const handlerLogout = () => {
    removeUser();
    googleLogout();
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] h-[38px] md:w-[130px] md:h-[30px]">
          <Image src={logo} alt="Logo" />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>
        {user ? (
          <div className="flex items-center gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            <div className="md:w-16 md:h-16 w-10 h-10">
              <Link href={`user/${user._id}`}>
                <Image
                  src={user.image}
                  alt="profile photo"
                  width={62}
                  height={62}
                  className="rounded-full w-16 h-16 object-cover"
                />
              </Link>
            </div>
            <button type="button" className="p-2" onClick={handlerLogout}>
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              createOrGetUser(credentialResponse, addUser);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        )}
      </div>
    </div>
  );
};
