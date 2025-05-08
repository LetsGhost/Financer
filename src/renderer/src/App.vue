<template>
  <div class="app-container">
    <Sidebar />
    <ManaTrack />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import ManaTrack from './components/ManaTrack.vue'
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
}

.main {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
