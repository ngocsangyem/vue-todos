<template>
  <div class="todos__list">
    <TodoItem
      v-on:del-todo="$emit('del-todo', todo.id)"
      :key="todo.id"
      v-for="todo in todos"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/mixins/index";
</style>
