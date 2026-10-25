\# Components



\## Screen 1: Recipe list



```

App

└─ RecipeList

&#x20;  └─ RecipeCard

```



\## Screen 2: Recipe detail



```

App

└─ RecipeDetail

```



\## Screen 3: Add recipe



```

App

└─ RecipeForm

```



\## Props, events and state



| Component | Props | Events | State it owns |

|---|---|---|---|

| App | none | none | `recipes` (the list), `screen` (which screen is shown), `selectedId` |

| RecipeList | `recipes` | `select(id)`, `add` | `search`, `category` |

| RecipeCard | `recipe` | `select(id)` | none |

| RecipeDetail | `recipe` | `toggleFavourite(id)`, `back` | none |

| RecipeForm | none | `save(recipe)`, `cancel` | the form fields (name, category, minutes, difficulty, ingredients, steps) |



\## State ownership



\- `App` owns `recipes` and is the only component that changes them.

\- `RecipeList` owns `search` and `category` because only the list needs them.

\- `RecipeCard` and `RecipeDetail` never change data. They emit events and `App` decides what to do.

\- Data goes down as props, and events up.

