<template>
  <div class="todos__item" :class="{'is-completed': todo.completed}">
    <input
      v-on:change="markComplete"
      class="todos__item-checkbox"
      type="checkbox"
      :id="'checkbox-' + todo.id"
    />
    <label :for="'checkbox-' + todo.id" class="todos__item-label">{{todo.title}}</label>
    <button @click="$emit('del-todo', todo.id)" type="button" class="todos__item-delete">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../styles/mixins/index";
.todos {
  &__item {
    position: relative;

    margin-bottom: 2rem;

    &-checkbox {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      &:checked {
        ~ label {
          &::after {
            transform: translateY(-50%) scale(1);
          }
        }
      }
    }

    &-label {
      position: relative;

      padding-left: rem(45px);

      cursor: pointer;
      user-select: none;
      display: block;

      font-size: 1rem;
      &::before,
      &::after {
        content: "";

        position: absolute;
        left: 0;
      }

      &:before {
        width: rem(30px);
        height: rem(30px);
        border-radius: 50%;
        border: 2px solid var(--secondary-color);

        top: 50%;
        transform: translateY(-50%);
      }

      &::after {
        content: "\f00c";

        font-family: "Font Awesome 5 Free";
        font-weight: 900;

        color: var(--primary-color);
        transform: translateY(-50%) scale(0);
        transition: transform 0.3s ease-in-out;

        left: 9px;
        top: 50%;
      }
    }

    &-delete {
      background-color: transparent;
      border: none;
      color: var(--red);
      position: relative;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;

      font-size: 1rem;

      position: absolute;
      top: 50%;
      right: 0;
      z-index: 1;

      transform: translateY(-50%);

      cursor: pointer;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      .todos__item-delete {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
