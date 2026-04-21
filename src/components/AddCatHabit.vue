<template>
  <div>
    <h2 class="section-title">Add a Habit 🐾</h2>
    <form @submit.prevent="handleAdd">
      <input
        v-model="newHabit"
        type="text"
        placeholder="Enter a new habit"
        class="input"
      />
      <button type="submit" class="primary-btn">Add Habit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCatHabitStore } from '../stores/catHabitStore'

const store = useCatHabitStore()
const newHabit = ref('')

const handleAdd = () => {
  if (!newHabit.value.trim()) return
  store.addHabit(newHabit.value)
  newHabit.value = ''
}
</script>
