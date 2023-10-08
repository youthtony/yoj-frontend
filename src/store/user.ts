// initial state
// state存储用户信息
import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    // 从远程获取登录信息
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log("用户", res.data);
      if (res.code === 0) {
        // 找到远程数据
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      console.log(payload);
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
