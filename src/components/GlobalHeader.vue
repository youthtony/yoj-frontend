<template>
  <div>
    <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img src="../assets/mylogo.gif" class="logo" />
              <div class="title">Y OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>{{ loginUser ?? "未登录" }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";

// 获取所有路由
const router = useRouter();
// 获取当前登录用户
const store = useStore();

// 自动更新loginUser的值
const loginUser = computed(() => {
  return store.state.user.loginUser.userName;
});

// 筛选路由 如果hideInMenu被定义，则将其筛选掉 computed:计算属性
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    // 过滤掉定义了hideInMenu的页面
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单，过滤掉没有权限的页面
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// 测试用 3s后自动登录
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "yiTao",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #8c8c8c;
  margin-left: 16px;
}

.logo {
  height: 75px;
}
</style>
