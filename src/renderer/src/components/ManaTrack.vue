<template>
  <div class="container">
    <div v-if="showMask" class="mask">
      <form @submit.prevent="save">
        <h2>Regelmäßige Buchungen</h2>
        <label>Betrag: € <input v-model="betrag" type="number" step="0.01" required /></label><br />
        <label
          >Kategorie:
          <select v-model="kategorie">
            <option value="Lebensmittel">Lebensmittel</option>
            <option value="Miete">Miete</option>
            <option value="Freizeit">Freizeit</option>
          </select> </label
        ><br />
        <label
          >Typ: <input type="radio" value="Einnahme" v-model="typ" /> Einnahme
          <input type="radio" value="Ausgabe" v-model="typ" /> Ausgabe </label
        ><br />
        <label
          >Wiederholung:
          <select v-model="wiederholung">
            <option>Täglich</option>
            <option>Wöchentlich</option>
            <option>Monatlich</option>
            <option>Jährlich</option>
          </select> </label
        ><br />
        <label
          >Startdatum:
          <input v-model="startdatum" type="date" /> </label
        ><br />
        <label
          >Notiz (optional):
          <input v-model="notiz" type="text" /> </label
        ><br />
        <button type="button" @click="close">Abbrechen</button>
        <button type="submit">Speichern</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import eventBus from '../event/eventBus.js'

const showMask = ref(false)
const betrag = ref('')
const kategorie = ref('')
const typ = ref('Einnahme')
const wiederholung = ref('Monatlich')
const startdatum = ref('')
const notiz = ref('')

function close() {
  showMask.value = false
}

function save() {
  // Handle save logic here
  close()
}

function openMask() {
  showMask.value = true
}

onMounted(() => {
  eventBus.on('open-mask', openMask)
})
onUnmounted(() => {
  eventBus.off('open-mask', openMask)
})
</script>

<style>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
}
.mask form {
  background: #1e1e1e;
  padding: 2em;
  border-radius: 8px;
  color: #e0e0e0;
}
</style>
