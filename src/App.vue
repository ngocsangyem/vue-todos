<template>
  <div id="app">
    <div class="todos">
      <div class="todos__header">
        <FilterTodos />
        <AddTodo />
      </div>
      <div class="todos__body">
        <Todos />
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>

<style lang="scss">
@import "./styles/mixins/index";
@import "./styles/index";

#app {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

.todos {
  width: 500px;

  background-color: var(--light-color);
  border-radius: var(--border-radius);

  padding: rem(30px);
  margin: 0 auto;

  &__header {
    margin-bottom: rem(30px);
  }

  @media screen and (max-width: 500px) {
    max-width: 500px;
  }
}
</style>
