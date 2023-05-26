import { useRouter } from "next/router";
import { useState, ChangeEvent, SyntheticEvent } from "react";
import { BiSearch } from "react-icons/bi";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handlerSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`)
    }
  };

  return (
    <div className="relative hidden md:block">
      <form
        onSubmit={handlerSubmit}
        className="bg-primary border-2 border-gray-100 focus:border-2 focus:border-gray-300 rounded-full flex items-center"
      >
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          className="w-[350px] pl-5 py-3 text-md font-medium bg-transparent outline-none"
        />
        <button className="border-l-2 border-gray-300 p-3 text-2xl text-gray-400 hover:text-black">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};
