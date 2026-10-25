<script setup lang="ts">
import type { Recipe } from "../types";

// Data IN
defineProps<{ recipe: Recipe }>();

// Messages OUT
const emit = defineEmits<{ toggleFavourite: [id: number]; back: [] }>();
</script>

<template>
  <section class="detail">
    <button @click="emit('back')">← Back</button>

    <div class="layout">
      <div class="side">
        <div class="photo">Photo</div>
        <button @click="emit('toggleFavourite', recipe.id)">
          {{ recipe.favourite ? "Remove from favourites" : "Mark as favourite" }}
        </button>
      </div>

      <div class="info">
        <h1>
          {{ recipe.name }}
          <span v-if="recipe.favourite" class="star">★</span>
        </h1>
        <p class="meta">
          {{ recipe.category }} · {{ recipe.minutes }} min · {{ recipe.difficulty }}
        </p>

        <h2>Ingredients</h2>
        <ul>
          <li v-for="item in recipe.ingredients" :key="item">{{ item }}</li>
        </ul>

        <h2>Steps</h2>
        <ol>
          <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detail {
  color: #111827;
}
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-top: 16px;
}
.side {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.photo {
  width: 100%;
  height: 160px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
h1 {
  margin: 0;
  font-size: 1.5rem;
}
h2 {
  font-size: 1.1rem;
  margin: 20px 0 8px;
}
.meta {
  color: #6b7280;
  text-transform: capitalize;
}
.star {
  color: #d97706;
}
</style>