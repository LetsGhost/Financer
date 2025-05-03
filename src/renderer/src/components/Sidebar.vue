<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo-top">
        <font-awesome-icon icon="fa-solid fa-coins" />
        <h2>Financer</h2>
      </div>
      <br />
      <p><font-awesome-icon :icon="['fas', 'house']" /> Home</p>
      <p><font-awesome-icon :icon="['fas', 'house']" /> Analytics</p>
      <div class="copyright-bottom">
        <p>© 2025 Financer.</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sidebar {
  width: 200px;
  background-color: #1e1e1e;
  padding: 20px;
  height: 100%;

  font-size: large;
}

p {
  color: #e0e0e0;
  font-size: 18px;
  margin-bottom: 10px;
}

h2 {
  color: #e0e0e0;
  font-size: 24px;
  margin-bottom: 20px;

  font-weight: bold;
  text-align: center;
  font-size: 2rem;
}

a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
}

.logo-top {
  display: flex;
  align-items: center;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-right: -20px;
  gap: 10px;
  border-bottom: 2px solid #e0e0e0;
  /* Remove or adjust these as needed: */
  padding-left: 20px;
  padding-right: 20px;
}

.logo-top .fa-icon,
.logo-top svg {
  font-size: 2rem;
  vertical-align: middle;
  position: relative;
  top: -10px; /* Adjust this value as needed for perfect alignment */
}

.copyright-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 20px;
  font-size: 5px;
  color: #a0a0a0;
}

.copyright-bottom p {
  margin: 0;
  font-size: 15px;
}
</style>
