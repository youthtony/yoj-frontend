<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
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
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #6eff84 1px 1px;
}

#basicLayout .content {
  margin-bottom: 16px;
  padding: 10px;
  //background: linear-gradient(to right, #6eff84, #fff);
}

#basicLayout .footer {
  background: #efefef;
  margin-bottom: 16px;
  position: sticky;
  bottom: 0px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
