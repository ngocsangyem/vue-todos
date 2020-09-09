<template>
  <ul class="todos__filter">
    <li class="todos__filter-item">All</li>
    <li class="todos__filter-item">Active</li>
    <li class="todos__filter-item">Complete</li>
  </ul>
</template>

<script>
export default {
  name: "FilterTodos",
};
</script>
<style lang="scss" scoped>
@import "../styles/mixins/index";
.todos {
  &__filter {
    display: flex;
    align-items: center;
    justify-content: center;
    &-item {
      padding: rem(10px) rem(15px);

      cursor: pointer;

      font-weight: 700;

      color: #e0e0e0;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #222222;
      }

      &.is-active {
        color: var(--primary-color);
      }
    }
  }
}
</style>
