<template>
  <div class="todo-item">
    <div class="todos__item">
      <input class="todos__item-checkbox" type="checkbox" id="checkbox1" />
      <label for="checkbox1" class="todos__item-label">Todo 1</label>
      <button type="button" class="todos__item-delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
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
        transform: scaleY(0);
        transition: transform 0.3s ease-in-out;

        left: 9px;
      }
    }

    &-delete {
      background-color: transparent;
      border: none;
      color: var(--red);
      position: relative;
      transform: scale(0);
      transition: transform 0.3s ease-in-out;

      font-size: 1rem;

      position: absolute;
      top: 50%;
      right: 0;
      z-index: 1;

      transform: translateY(-50%) scale(0);

      cursor: pointer;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      .todos__item-delete {
        transform: translateY(-50%) scale(1);
      }
    }

    &.is-completed {
      .todos__item-label {
        &::after {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
