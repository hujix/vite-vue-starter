import { getUserInfo } from "@/api/user";
import { defineStore } from "pinia";

import { UserState } from "./types";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    name: "",
    count: 0
  }),
  getters: {
    userInfo: (state) => {
      return { ...state };
    }
  },
  actions: {
    async updateUserInfo() {
      const result = await getUserInfo();
      this.name = result.name;
      this.count = result.count;
    }
  }
});
