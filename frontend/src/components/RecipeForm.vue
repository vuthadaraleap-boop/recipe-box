<script setup lang="ts">
import { ref } from "vue";
import type { Difficulty, Recipe, RecipeCategory } from "../types";

// Messages OUT. The form owns only its own fields.
const emit = defineEmits<{
  save: [recipe: Omit<Recipe, "id" | "favourite">];
  cancel: [];
}>();

const name = ref("");
const category = ref<RecipeCategory>("dinner");
const minutes = ref(30);
const difficulty = ref<Difficulty>("easy");
const ingredients = ref("");
const steps = ref("");
const error = ref("");

// One item per line
function lines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
}

function onSave() {
  if (name.value.trim() === "") {
    error.value = "Enter a recipe name.";
    return;
  }
  if (!(minutes.value > 0)) {
    error.value = "Enter the minutes as a number above 0.";
    return;
  }
  error.value = "";
  emit("save", {
    name: name.value.trim(),
    category: category.value,
    minutes: minutes.value,
    difficulty: difficulty.value,
    ingredients: lines(ingredients.value),
    steps: lines(steps.value),
  });
}
</script>

<template>
  <section class="form">
    <button @click="emit('cancel')">← Cancel</button>
    <h1>New recipe</h1>

    <label>
      Name
      <input v-model="name" type="text" />
    </label>

    <label>
      Category
      <select v-model="category">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
    </label>

    <label>
      Minutes
      <input v-model.number="minutes" type="number" min="1" />
    </label>

    <label>
      Difficulty
      <select v-model="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </label>

    <label>
      Ingredients (one per line)
      <textarea v-model="ingredients" rows="5"></textarea>
    </label>

    <label>
      Steps (one per line)
      <textarea v-model="steps" rows="5"></textarea>
    </label>

    <p v-if="error" class="error">{{ error }}</p>

    <button @click="onSave">Save</button>
  </section>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  color: #111827;
}
.form button {
  align-self: flex-start;
}
h1 {
  margin: 0;
  font-size: 1.5rem;
}
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.error {
  color: #d73a49;
  margin: 0;
}
</style>