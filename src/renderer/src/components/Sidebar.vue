<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo-top">
        <font-awesome-icon icon="fa-solid fa-coins" />
        <h2>Financer</h2>
      </div>
      <br />
      <router-link to="/" class="sidebar-link">
        <font-awesome-icon :icon="['fas', 'house']" /> Home
      </router-link>
      <router-link to="/management" class="sidebar-link">
        <font-awesome-icon :icon="['fas', 'house']" /> Management
      </router-link>
      <div class="settings-bottom">
        <router-link to="/settings" class="sidebar-link settings-link">
          <font-awesome-icon :icon="['fas', 'gear']" />
        </router-link>
      </div>
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
  margin-right: 1rem;
  position: relative;
}

.settings-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70px; /* Place above copyright */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.settings-link .fa-icon,
.settings-link svg {
  font-size: 2.5rem;
  color: #e0e0e0;
  transition: color 0.2s;
}

.settings-link:hover .fa-icon,
.settings-link:hover svg {
  color: #2d8cf0;
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
  padding-left: 20px;
  padding-right: 20px;
}

.logo-top .fa-icon,
.logo-top svg {
  font-size: 2rem;
  vertical-align: middle;
  position: relative;
  top: -10px;
}

.copyright-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 20px;
  font-size: 5px;
  color: #a0a0a0;
  text-align: center;
}

.copyright-bottom p {
  margin: 0;
  font-size: 15px;
}
</style>
