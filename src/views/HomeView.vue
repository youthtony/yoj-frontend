<template>
  <div class="home">
    <MdEditor :value="value" :handle-change="onChange" />
    <CodeEditor
      :value="codeValue"
      language="java"
      :handle-change="handleChange"
    />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const value = ref();
const codeValue = ref();
const onChange = (v: string) => {
  value.value = v;
};

const handleChange = (v: string) => {
  codeValue.value = v;
  console.log("代码", v);
};
</script>
