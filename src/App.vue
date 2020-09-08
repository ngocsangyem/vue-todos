<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import Todos from "./components/todos";

export default {
  name: "App",
  components: {
    Todos,
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
};
</script>

<style lang="scss">
@import "./styles/index";

#app {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
}
</style>
