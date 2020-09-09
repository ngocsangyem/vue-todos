<template>
  <div class="todos__item" :class="{'is-completed': todo.completed}">
    <input
      v-on:change="markComplete"
      class="todos__item-checkbox"
      type="checkbox"
      :id="'checkbox-' + todo.id"
    />
    <input
      v-if="todo.editing"
      v-model="todo.title"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancleEdit(todo)"
      type="text"
      class="edit"
      v-focus
    />
    <label :for="'checkbox-' + todo.id" class="todos__item-label">{{todo.title}}</label>
    <div class="todos__item-actions">
      <button @click="editTodo(todo)" type="button" class="todos__item-action todos__item-edit">
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button
        @click="$emit('del-todo', todo.id)"
        type="button"
        class="todos__item-action todos__item-delete"
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      beforeEditCache: "",
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    doneEdit(todo) {
      if (todo.title.trim() === "") {
        todo.title = this.beforeEditCache;
      }
      todo.editing = false;
    },
    cancleEdit(todo) {
      this.title = this.beforeEditCache;
      todo.editing = false;
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

    .edit {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;

      width: calc(100% - 20px);
      height: rem(34px);
      border: 1px solid var(--neutral-shade-color-2);
      font-size: 1rem;

      padding: 0 10px;
    }

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

      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;

      font-size: 1rem;
      &::after,
      &::before {
        content: "";
      }

      &::before {
        display: inline-block;
        width: rem(30px);
        height: rem(30px);
        border-radius: 50%;
        border: 2px solid var(--secondary-color);

        margin-right: rem(10px);
      }

      &::after {
        content: "\f00c";

        font-family: "Font Awesome 5 Free";
        font-weight: 900;

        color: var(--primary-color);
        transform: translateY(-50%) scale(0);
        transition: transform 0.3s ease-in-out;

        position: absolute;
        left: 0;
        left: 9px;
        top: 50%;
      }
    }

    &-actions {
      display: flex;

      position: absolute;
      top: 50%;
      right: 0;
      z-index: 1;

      opacity: 0;
      visibility: hidden;
      transform: translateY(-50%);
      transition: all 0.3s ease-in-out;
    }

    &-action {
      background-color: transparent;
      border: none;

      font-size: 1rem;

      cursor: pointer;
    }

    &-edit {
      color: var(--green);
    }

    &-delete {
      color: var(--red);

      margin-left: 0.5rem;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      .todos__item-actions {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
