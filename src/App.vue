<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link v-for="i in 10" :key="i" :to="`/page/${i}`" class="link">{{ i }}</router-link>
    </div>

    <router-view
      v-slot="{ Component }"
      class="view"
    >
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.view {
  margin-top: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>