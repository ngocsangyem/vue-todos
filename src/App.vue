<template>
  <div id="app">
    <div class="todos">
      <div class="todos__header">
        <AddTodo v-on:add-todo="onAddTodo" />
      </div>
      <div class="todos__body">
        <Todos v-bind:todos="todos" v-on:del-todo="onDeleteTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false,
        },
        {
          id: 2,
          title: "Todo Two",
          completed: false,
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false,
        },
      ],
    };
  },

  methods: {
    onDeleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onAddTodo(newTodo) {
      this.todos = [newTodo, ...this.todos];
    },
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
