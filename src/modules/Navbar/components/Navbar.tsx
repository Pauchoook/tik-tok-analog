import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/tiktik-logo.png";
import { UserPanel } from "./UserPanel";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] h-[38px] md:w-[130px] md:h-[30px]">
          <Image src={logo} alt="Logo" />
        </div>
      </Link>
      <Search />
      <UserPanel />
    </div>
  );
};
