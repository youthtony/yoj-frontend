<template>
  <div class="userRegisterView">
    <h2 style="margin-top: 50px; margin-bottom: 16px">用户注册</h2>
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
      <a-form-item field="checkPassword" label="确认密码">
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次输入密码以示确认"
        />
      </a-form-item>
      <a-form-item style="display: flex">
        <a-button style="width: 200px; margin: 5px; flex: 1">取消 </a-button>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 200px; margin: 5px; flex: 1"
          >注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserRegisterRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

function goBack() {
  alert("ss");
  router.back();
}

/**
 * 表单信息
 */
const form = reactive({
  checkPassword: "",
  userAccount: "",
  userPassword: "",
}) as UserRegisterRequest;

const router = useRouter();
const store = useStore();

/**
 * 表单信息
 */
const handleSubmit = async () => {
  // 点击提交
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    //   如果注册成功，直接跳转到登录页
    await store.dispatch("user/getLoginUser");
    message.success("欢迎你，" + form.userAccount);
    router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    message.error("注册失败，" + res.message);
  }
};
</script>
