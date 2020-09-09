<template>
  <ul class="todos__filter">
    <li
      class="todos__filter-item"
      :class="{'is-active': filter === 'all'}"
      @click="updateFilter('all')"
    >All</li>
    <li
      class="todos__filter-item"
      :class="{'is-active': filter === 'active'}"
      @click="updateFilter('active')"
    >Active</li>
    <li
      class="todos__filter-item"
      :class="{'is-active': filter === 'completed'}"
      @click="updateFilter('completed')"
    >Completed</li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  computed: {
    filter() {
      return this.$store.state.todos.filter;
    },
  },
  methods: {
    ...mapActions(["updateFilter"]),
  },
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
