<script setup lang="ts">
import { computed, ref } from "vue";
import type { Recipe, RecipeCategory } from "../types";
import RecipeCard from "./RecipeCard.vue";

// Data IN
const props = defineProps<{ recipes: Recipe[] }>();

// Messages OUT
const emit = defineEmits<{ select: [id: number]; add: [] }>();

// Filter state, owned by the list
const search = ref("");
const category = ref<RecipeCategory | "all">("all");

// Calculated from the state above, so it is a computed
const visible = computed(() => {
  const q = search.value.toLowerCase();
  return props.recipes.filter(
    (r) =>
      (category.value === "all" || r.category === category.value) &&
      r.name.toLowerCase().includes(q),
  );
});
</script>

<template>
  <section>
    <header class="top">
      <h1>Recipe box</h1>
      <button @click="emit('add')">+ Add recipe</button>
    </header>

    <div class="filters">
      <input
        v-model="search"
        type="search"
        placeholder="Search recipes"
        aria-label="Search"
      />
      <select v-model="category" aria-label="Category">
        <option value="all">All categories</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>

    <p class="count">{{ visible.length }} of {{ recipes.length }} recipes</p>

    <div v-if="visible.length" class="grid">
      <RecipeCard
        v-for="r in visible"
        :key="r.id"
        :recipe="r"
        @select="emit('select', $event)"
      />
    </div>
    <p v-else class="empty">No recipes match your search.</p>
  </section>
</template>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
h1 {
  margin: 0;
  font-size: 1.5rem;
}
.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filters input {
  flex: 1;
  min-width: 200px;
}
.count {
  color: #6b7280;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.empty {
  padding: 32px;
  text-align: center;
  background: white;
  border-radius: 10px;
}
</style>