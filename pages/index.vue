<template>
  <div>
    <BaseSearch v-model="search" />
    <TodoList
      :list="filterTodos"
      :count-per-page="perPage"
      :current-page="page"
    />
    <BasePagination
      v-model="page"
      :length="length"
    />
  </div>
</template>

<script>
import BaseSearch from '@/components/Base/BaseSearch.vue'
import TodoList from '@/components/Todo/TodoList.vue'
import BasePagination from '@/components/Base/BasePagination.vue'

export default {
  name: 'IndexPage',

  components: {
    BaseSearch,
    BasePagination,
    TodoList
  },

  data () {
    return {
      search: '',
      page: 1,
      perPage: 25
    }
  },

  computed: {
    filterTodos (context) {
      return context.$store.getters.filterTodos(this.search)
    },

    length () {
      return Math.round(this.filterTodos.length / this.perPage)
    }
  },

  watch: {
    page () {
      this.setQuery()
    }
  },

  created () {
    this.getQuery()
    this.checkPage()
  },

  methods: {
    /**
     * Get query parameters url
     */
    getQuery () {
      if (Object.keys(this.$route.query).length !== 0) {
        const { page } = this.$route.query
        this.page = +page
      }
    },

    /**
     * Set query parameters url
     */
    setQuery () {
      this.$router.replace({ query: this.page === 1 ? {} : { page: this.page } }).catch(() => {})
    },

    checkPage () {
      if (this.page > this.length) {
        this.$nuxt.error({ statusCode: 404 })
      }
    }
  }
}
</script>
