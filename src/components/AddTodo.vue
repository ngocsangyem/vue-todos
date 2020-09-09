<template>
  <div class="todos__add">
    <input
      type="text"
      name="add-todo"
      id="add-todo"
      class="todos__input"
      placeholder="Add todo"
      required
      v-model="title"
      v-on:keyup.enter="onAddTodo"
    />
    <span class="todos__add-border"></span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onAddTodo() {
      this.addTodo({
        id: Date.now(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins/index";
.todos {
  &__add {
    position: relative;
    overflow: hidden;
  }

  &__input {
    border: none;
    border-bottom: 2px solid var(--neutral-shade-color-3);
    background-color: transparent;
    width: 100%;

    padding-top: rem(10px);
    padding-bottom: rem(10px);
    @include placeholder {
      color: var(--neutral-shade-color-3);
      font-size: 1rem;
    }

    &:focus,
    &:valid {
      outline: none;

      ~ .todos__add-border {
        transform: scale(1);
        transition: 0.4s;
      }
    }
  }

  &__add-border {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background-color: var(--primary-color);
    transform: scale(0);
    transition: transform 0.4s ease-in-out;
  }
}
</style>
