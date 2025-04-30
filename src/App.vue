<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- 导航菜单-点击页面地址会变，没有刷新页面的视觉效果 -->
  <!-- <nav>
    <router-link to="/home">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </nav> -->
  <!-- 渲染路由内容 -->
  <router-view />
</template>

<style scoped>
</style>
