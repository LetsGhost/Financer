<template>
  <div>
    <p>Management</p>
    <button @click="openMask">Neue Buchung</button>
  </div>
</template>

<script setup>
import eventBus from '../event/eventBus.js'

function openMask() {
  eventBus.emit('open-mask')
}
</script>
