<template>
  <div class="dashboard-grid">
    <div class="dashboard-box">
      <h3>Test</h3>
    </div>
    <div class="dashboard-box">
      <h3>Test</h3>
    </div>
    <div class="dashboard-box">
      <h3>Balance</h3>
    </div>
    <div class="dashboard-box">
      <h3>Test</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      console.log(window.electron)
      window.electron.send('ping')
    }
  }
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  gap: 0;
}

.dashboard-box {
  border: 2px solid #2d8cf0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  width: 100%;
}

.dashboard-box h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}
</style>
