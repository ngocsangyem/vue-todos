<template>
  <div class="todos">
    <div class="todos__header">
      <div class="todos__add">
        <input
          type="text"
          name="add-todo"
          id="add-todo"
          class="todos__input"
          placeholder="Add todo"
          required
        />
        <span class="todos__add-border"></span>
      </div>
    </div>
    <div class="todos__body">
      <div class="todos__list">
        <TodoItem />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./todo-item";

export default {
  name: "Todos",
  props: {
    title: String,
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/mixins/index";
.todos {
  width: 500px;

  background-color: var(--light-color);
  border-radius: var(--border-radius);

  padding: rem(30px);
  margin: 0 auto;

  &__header {
    margin-bottom: rem(30px);
  }

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

  @media screen and (max-width: 500px) {
    max-width: 500px;
  }
}
</style>
