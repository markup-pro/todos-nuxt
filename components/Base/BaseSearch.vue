<template>
  <div class="search">
    <input
      :placeholder="placeholder"
      type="text"
      class="search__input"
      @input="searchInput"
      @paste="searchInput"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseSearch',

  props: {
    placeholder: {
      type: String,
      default: 'Поиск'
    }
  },

  methods: {
    /**
     * Change input search
     *  @param {object} e - input event.
     */
    searchInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.search {
  margin-bottom: 15px;

  &__input {
    padding: 10px;
    display: block;
    width: 100%;
  }
}
</style>
