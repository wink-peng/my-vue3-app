<template>
  <div class="default-layout">
    <!-- 公共头部 -->
    <header>
      <nav>
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/users">users</router-link>
      </nav>
    </header>
    
    <!-- 页面内容 -->
    <main>
      <router-view />
    </main>
    
    <!-- 公共页脚 -->
    <footer>
      <p>© 2023 My App</p>
    </footer>
  </div>
</template>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  padding: 20px;
}
footer {
  padding: 10px;
  background: #f0f0f0;
  text-align: center;
}
</style>