import { defineStore } from 'pinia'

export interface Habit {
  id: number
  name: string
  completed: boolean
}

export const useCatHabitStore = defineStore('catHabitStore', {
  state: () => ({
    habits: [] as Habit[]
  }),

  getters: {
    totalHabits: (state) => state.habits.length,

    completedHabits: (state) =>
      state.habits.filter(h => h.completed).length,

    catMood: (state) => {
      const total = state.habits.length
      const completed = state.habits.filter(h => h.completed).length

      if (total === 0) return "😺 Content"

      const percent = (completed / total) * 100

      if (percent === 100) return "😸 Happy"
      if (percent >= 50) return "😺 Content"
      return "😾 Grumpy"
    }
  },

  actions: {
    // Load saved habits
    loadFromLocalStorage() {
      const saved = localStorage.getItem('habits')
      this.habits = saved ? JSON.parse(saved) : []
    },

    // Save habits
    saveToLocalStorage() {
      localStorage.setItem('habits', JSON.stringify(this.habits))
    },

    addHabit(name: string) {
      this.habits.push({
        id: Date.now(),
        name,
        completed: false
      })
      this.saveToLocalStorage()
    },

    toggleHabit(id: number) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) {
        habit.completed = !habit.completed
        this.saveToLocalStorage()
      }
    },

    resetHabits() {
      this.habits = []
      this.saveToLocalStorage()
    }
  }
})
