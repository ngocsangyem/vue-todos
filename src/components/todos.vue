<template>
  <div class="todos__list">
    <TodoItem v-on:del-todo="deleteTodo" :key="todo.id" v-for="todo in getTodos" :todo="todo" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  computed: mapGetters(["getTodos"]),
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>

<style scoped lang="scss">
@import "../styles/mixins/index";
</style>
