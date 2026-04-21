<template>
  <div>
    <h2 class="section-title">Your Habits 📝</h2>

    <p v-if="store.totalHabits === 0" class="empty">
      No habits yet — add one above! 🐾
    </p>

    <ul v-else class="habit-list">
      <li
        v-for="habit in store.habits"
        :key="habit.id"
        :class="{ completed: habit.completed }"
      >
        <label>
          <input
            type="checkbox"
            :checked="habit.completed"
            @change="store.toggleHabit(habit.id)"
          />
          {{ habit.name }}
        </label>
        <button class="delete-btn" @click="store.deleteHabit(habit.id)">✖</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCatHabitStore } from '../stores/catHabitStore'

const store = useCatHabitStore()
</script>

<style>
.habit-list {
  list-style: none;
  padding: 0;
}

.habit-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.delete-btn {
  background: transparent;
  border: none;
  color: var(--pink-dark);
  cursor: pointer;
}
.empty {
  opacity: 0.7;
  font-style: italic;
}
</style>
