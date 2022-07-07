<template>
  <div
    v-if="length > 1"
    class="pagination"
  >
    <button
      :disabled="value === 1"
      class="pagination__item pagination__item_nav"
      @click.prevent="changePage(value - 1)"
    >
      &#5176;
    </button>
    <div
      v-for="item in length"
      :key="item"
      :class="['pagination__item', {'pagination__item_active' : value === item}]"
      @click="changePage(item)"
    >
      {{ item }}
    </div>
    <button
      :disabled="value === length"
      class="pagination__item pagination__item_nav"
      @click.prevent="changePage(value + 1)"
    >
      &#5171;
    </button>
  </div>
</template>

<script>

export default {
  props: {
    // Current selected page
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: null
    },
    // The length of the pagination component
    length: {
      type: Number,
      default: 1
    }
  },

  watch: {
    length () {
      this.$emit('input', 1)
    }
  },

  methods: {
    /**
     * Change page
     *  @param {Number} page - current page value.
     */
    changePage (page) {
      if (page < 1 || page > this.length) {
        return
      }
      this.$emit('input', page)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 35px;
    height: 32px;
    cursor: pointer;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid #3eaf7c;
    color: #3eaf7c;
    border-radius: 3px;
    background-color: transparent;
    transition: all .25s;

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    &:hover:not(&:disabled),
    &_active {
      color: #fff;
      background-color: #3eaf7c;
    }

    &_active {
      cursor: default;
    }

    &_nav {
      border: 0;
      margin: 0;
    }
  }
}
</style>
