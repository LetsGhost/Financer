<template>
  <div class="dashboard-grid">
    <div class="dashboard-box">
      <h3>Wiederholende Zahlungen</h3>
      <div class="payment-cards">
        <div
          v-for="(payment, idx) in nextRecurringPayments"
          :key="idx"
          class="payment-card"
        >
          <div class="payment-title">{{ payment.title }}</div>
          <div class="payment-amount">{{ payment.amount }} €</div>
          <div class="payment-date">Nächste Fälligkeit: {{ payment.nextDate }}</div>
        </div>
        <div v-if="nextRecurringPayments.length === 0" class="no-payments">
          Keine wiederholenden Zahlungen gefunden.
        </div>
      </div>
      <button class="new-booking-btn" @click="openMask">Neue Buchung</button>
    </div>
    <div class="dashboard-box"></div>
    <div class="dashboard-box"></div>
    <div class="dashboard-box"></div>
  </div>
</template>

<script setup>
import eventBus from '../event/eventBus.js'
import { ref } from 'vue'


// Dummy data for demonstration
const recurringPayments = ref([
  { title: 'Miete', amount: 800, nextDate: '2025-05-10' },
  { title: 'Netflix', amount: 15, nextDate: '2025-05-12' },
  { title: 'Fitnessstudio', amount: 30, nextDate: '2025-05-15' },
  { title: 'Handyvertrag', amount: 25, nextDate: '2025-05-20' }
])

const nextRecurringPayments = ref(
  recurringPayments.value.slice(0, 3)
)


function openMask() {
  eventBus.emit('open-mask')
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  gap: 1rem; /* Increased gap for visible space between boxes */
}

.dashboard-box {
  background-color: #1E1E1E;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 18px;
}

.dashboard-box h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
}

.payment-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.payment-card {
  background: #232323;
  /* Remove blue border and add a soft shadow */
  border: none;

  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.payment-title {
  font-weight: bold;
}

.payment-amount {
  color: #2d8cf0;
  margin: 0.2rem 0;
}

.payment-date {
  font-size: 0.9rem;
  color: #bbb;
}

.no-payments {
  color: #bbb;
  font-size: 1rem;
  text-align: center;
}

.new-booking-btn {
  margin-top: auto;
  padding: 0.5rem 1.2rem;
  background: #2d8cf0;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.new-booking-btn:hover {
  background: #1867c0;
}
</style>