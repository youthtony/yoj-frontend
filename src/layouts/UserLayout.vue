<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="@/assets/mylogo.gif" class="logo" />
          <div>Y OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <p>OJ系统，制作：Yi</p>
        <a
          href="https://i.csdn.net/#/user-center/profile?spm=1000.2115.3001.5111"
          target="_blank"
        >
          小易博客
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  background: url("@/assets/BLUE.jpg");
  text-align: center;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 10px;
}

#userLayout .footer {
  margin-bottom: 16px;
  position: sticky;
  bottom: 0px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
