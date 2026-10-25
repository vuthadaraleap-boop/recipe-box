<script setup lang="ts">
import { computed, ref } from "vue";
import RecipeList from "./components/RecipeList.vue";
import RecipeDetail from "./components/RecipeDetail.vue";
import RecipeForm from "./components/RecipeForm.vue";
import { initialRecipes } from "./data/recipes";
import type { Recipe } from "./types";

// App owns the data
const recipes = ref<Recipe[]>(initialRecipes.map((r) => ({ ...r })));

// Which screen is open
const selectedId = ref<number | null>(null);
const adding = ref(false);

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
  adding.value = true;
}

function onCancel() {
  adding.value = false;
}

function onSave(data: Omit<Recipe, "id" | "favourite">) {
  const nextId = Math.max(0, ...recipes.value.map((r) => r.id)) + 1;
  recipes.value.push({ ...data, id: nextId, favourite: false });
  adding.value = false;
}
</script>

<template>
  <main>
    <RecipeForm v-if="adding" @save="onSave" @cancel="onCancel" />
    <RecipeDetail
      v-else-if="selected"
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