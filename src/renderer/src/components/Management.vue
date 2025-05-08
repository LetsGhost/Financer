<template>
  <div class="dashboard-grid">
    <div
      class="dashboard-box"
      :class="{ selected: selectedBox === 0 }"
      @click="selectBox(0)"
    >
      <h3>Wiederholende Zahlungen</h3>
      <div class="payment-cards">
        <template v-for="(payment, idx) in nextRecurringPayments" :key="idx">
          <div class="payment-card">
            <div class="payment-title">{{ payment.title }}</div>
            <div class="payment-amount">{{ payment.amount }} €</div>
            <div class="payment-date">Nächste Fälligkeit: {{ payment.nextDate }}</div>
          </div>
          <div
            v-if="idx < nextRecurringPayments.length - 1"
            class="divider-with-date"
          >
            <span class="divider-date">{{ payment.nextDate }}</span>
            <span class="divider-line"></span>
          </div>
        </template>
        <div v-if="nextRecurringPayments.length === 0" class="no-payments">
          Keine wiederholenden Zahlungen gefunden.
        </div>
      </div>
      <button class="new-booking-btn" @click.stop="openMask">Neue Buchung</button>
    </div>
    <div class="dashboard-box" :class="{ selected: selectedBox === 1 }" @click="selectBox(1)">
      <h3>Alle Transaktionen</h3>
      <div class="payment-cards">
        <div v-for="(transaction, idx) in allTransactions" :key="idx" class="payment-card">
          <div class="payment-title">{{ transaction.title }}</div>
          <div class="payment-amount">{{ transaction.amount }} €</div>
          <div class="payment-date">Datum: {{ transaction.date }}</div>
        </div>
        <div v-if="allTransactions.length === 0" class="no-payments">
          Keine Transaktionen gefunden.
        </div>
      </div>
      <button class="new-booking-btn" @click.stop="openTransactionMask">Neue Zahlung</button>
    </div>
    <div class="dashboard-box" :class="{ selected: selectedBox === 2 }" @click="selectBox(2)"></div>
    <div class="dashboard-box" :class="{ selected: selectedBox === 3 }" @click="selectBox(3)"></div>
  </div>
</template>

<script setup>
import eventBus from '../event/eventBus.js'
import { ref } from 'vue'

const selectedBox = ref(null)

function selectBox(idx) {
  selectedBox.value = idx
}

// Dummy data for demonstration
const recurringPayments = ref([
  { title: 'Miete', amount: 800, nextDate: '2025-05-10' },
  { title: 'Netflix', amount: 15, nextDate: '2025-05-12' },
  { title: 'Fitnessstudio', amount: 30, nextDate: '2025-05-15' },
  { title: 'Handyvertrag', amount: 25, nextDate: '2025-05-20' }
])

const nextRecurringPayments = ref(recurringPayments.value.slice(0, 3))

// Dummy data for all transactions
const allTransactions = ref([
  { title: 'Miete', amount: 800, date: '2025-05-01' },
  { title: 'Supermarkt', amount: 120, date: '2025-05-03' },
  { title: 'Netflix', amount: 15, date: '2025-05-04' },
  { title: 'Restaurant', amount: 45, date: '2025-05-05' }
])

function openMask() {
  eventBus.emit('open-mask')
}

function openTransactionMask() {
  eventBus.emit('open-transaction-mask')
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  gap: 1rem;
}

.dashboard-box {
  background-color: #1e1e1e;
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
  transition:
    box-shadow 0.2s,
    border 0.2s;
  cursor: pointer;
}

.dashboard-box.selected {
  box-shadow: 0 0 0 3px #2d8cf0;
  border: 2px solid #2d8cf0;
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

.divider-with-date {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.3rem 0;
}

.divider-date {
  font-size: 0.85rem;
  color: #bbb;
  margin-right: 0.7rem;
  min-width: 110px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #333;
  border-radius: 1px;
}
</style>
