<template>
  <div class="todos__list">
    <TodoItem
      v-on:del-todo="$emit('del-todo', todo.id)"
      :key="todo.id"
      v-for="todo in getTodos"
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem,
  },
  computed: mapGetters(["getTodos"]),
};
</script>

<style scoped lang="scss">
@import "../styles/mixins/index";
</style>
