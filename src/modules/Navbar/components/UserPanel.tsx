import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../helpers/createOrGetUser";
import useUserStore from "@/store/userStore";
import Link from "next/link";
import Image from "next/image";

export const UserPanel = () => {
  const { user, addUser, removeUser } = useUserStore();

  const handlerLogout = () => {
    removeUser();
    googleLogout();
  };

  return (
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
            <Link
              href={`/user/${user._id}`}
              className="relative block w-full h-full"
            >
              <Image
                src={user.image}
                alt="profile photo"
                fill
                className="rounded-full"
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
  );
};
