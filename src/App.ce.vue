<script setup>
import HelloWorld from './components/HelloWorld.ce.vue'

const props = defineProps({
  msg: {
    type: String,
    default: 'Vite + Vue',
  },
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="props.msg" />
</template>

<style>
@import url('./style.css');
</style>
