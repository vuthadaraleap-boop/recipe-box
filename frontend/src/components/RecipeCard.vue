<script setup lang="ts">
import type { Recipe } from "../types";

// Data comes IN as a prop
defineProps<{ recipe: Recipe }>();

// Messages go OUT as an event
const emit = defineEmits<{ select: [id: number] }>();
</script>

<template>
  <article class="card">
    <p class="category">{{ recipe.category }}</p>
    <h2>
      {{ recipe.name }}
      <span v-if="recipe.favourite" class="star" title="Favourite">★</span>
    </h2>
    <p class="meta">{{ recipe.minutes }} min · {{ recipe.difficulty }}</p>
    <button @click="emit('select', recipe.id)">View</button>
  </article>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
h2 {
  font-size: 1.1rem;
  margin: 0;
}
.category {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin: 0;
}
.meta {
  color: #6b7280;
  margin: 0;
}
.star {
  color: #d97706;
}
button {
  margin-top: auto;
  align-self: flex-start;
}
</style>