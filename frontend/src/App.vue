<script setup lang="ts">
import { computed, ref } from "vue";
import RecipeList from "./components/RecipeList.vue";
import RecipeDetail from "./components/RecipeDetail.vue";
import { initialRecipes } from "./data/recipes";
import type { Recipe } from "./types";

// App owns the data
const recipes = ref<Recipe[]>(initialRecipes.map((r) => ({ ...r })));

// Which recipe is open (null = show the list)
const selectedId = ref<number | null>(null);

const selected = computed(() =>
  recipes.value.find((r) => r.id === selectedId.value),
);

function onSelect(id: number) {
  selectedId.value = id;
}

function onBack() {
  selectedId.value = null;
}

function onToggleFavourite(id: number) {
  const recipe = recipes.value.find((r) => r.id === id);
  if (recipe) {
    recipe.favourite = !recipe.favourite;
  }
}

function onAdd() {
  console.log("add recipe clicked");
}
</script>

<template>
  <main>
    <RecipeDetail
      v-if="selected"
      :recipe="selected"
      @back="onBack"
      @toggle-favourite="onToggleFavourite"
    />
    <RecipeList
      v-else
      :recipes="recipes"
      @select="onSelect"
      @add="onAdd"
    />
  </main>
</template>

<style scoped>
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}
</style>