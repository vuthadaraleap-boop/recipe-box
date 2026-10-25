<script setup lang="ts">
import { ref } from "vue";
import RecipeList from "./components/RecipeList.vue";
import { initialRecipes } from "./data/recipes";
import type { Recipe } from "./types";

// App owns the data. A copy keeps the original sample data untouched.
const recipes = ref<Recipe[]>(initialRecipes.map((r) => ({ ...r })));

// Which recipe the user picked (the detail screen comes next)
const selectedId = ref<number | null>(null);

function onSelect(id: number) {
  selectedId.value = id;
}

function onAdd() {
  console.log("add recipe clicked");
}
</script>

<template>
  <main>
    <RecipeList :recipes="recipes" @select="onSelect" @add="onAdd" />
    <p v-if="selectedId !== null" class="picked">
      You picked recipe {{ selectedId }}.
    </p>
  </main>
</template>

<style scoped>
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}
.picked {
  margin-top: 16px;
  color: #6b7280;
}
</style>