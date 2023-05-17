import useUserStore from "@/store/userStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GoVerified } from "react-icons/go";

export const SuggestedAccounts = () => {
  const { fetchUsers, users } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="xl:border-b-2 border-gray-200 pb-4">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">SuggestedAccounts</p>
      <div>
        {users.slice(0, 6).map((user) => (
          <Link href={`/user/${user._id}`} key={user._id}>
            <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
              <div className="relative w-[34px] h-[34px]">
                <Image src={user.image} fill className="rounded-full object-cover" alt="user profile" />
              </div>
              <div className="hidden xl:block">
                <p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
                  {user.username.replaceAll(" ", "")}
                  <GoVerified className="text-blue-400" />
                </p>
                <div className="capitalize text-gray-400 text-xs">{user.username}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
