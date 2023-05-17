import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { IUser } from "@/utils/types";

interface IUserStore {
  user: IUser | null;
  users: IUser[];
  addUser: (user: IUser) => void;
  removeUser: () => void;
  fetchUsers: () => void;
}

const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      user: null,
      users: [],
      addUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
      fetchUsers: async () => {
        const { data } = await axios.get<IUser[]>(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/users`);
        set({ users: data });
      },
    }),
    { name: "user" },
  ),
);

export default useUserStore;
