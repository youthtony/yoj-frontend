<template>
  <div class="userLoginView">
    <h2 style="margin-top: 50px; margin-bottom: 16px">用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账户">
        <a-input v-model="form.userAccount" placeholder="请输入账户名" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入不少于六位的密码"
        />
      </a-form-item>
      <a-form-item style="display: flex">
        <a-button style="width: 200px; margin: 5px; flex: 1">取消</a-button>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 200px; margin: 5px; flex: 1"
          >登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
}) as UserLoginRequest;

const router = useRouter();
const store = useStore();

/**
 * 表单信息
 */
const handleSubmit = async () => {
  // 点击提交
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    //   如果登录成功，直接跳转到主页
    console.log(res.data);
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败，" + res.message);
  }
};
</script>
