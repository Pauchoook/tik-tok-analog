import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { IUser } from "@/utils/types";

interface IUserStore {
  user: IUser | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
}

const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      user: null,
      addUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    { name: "user" }
  )
);

export default useUserStore;
