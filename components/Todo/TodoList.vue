<template>
  <div>
    <table v-if="chunkList.length > 0" class="todo-list">
      <thead>
        <tr class="todo-list__row">
          <th
            v-for="el in tableHead"
            :key="el"
            class="todo-list__th"
          >
            {{ el }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in chunkList"
          :key="item.id"
          :class="['todo-list__row', item.completed ? 'todo-list__row_green' : 'todo-list__row_red']"
        >
          <td class="todo-list__th">
            {{ item.title }}
          </td>
          <td class="todo-list__th">
            {{ item.completed }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      Результатов не найдено
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',

  props: {
    /**
     * Todos list
     */
    list: {
      type: Array,
      default: () => ([])
    },
    /**
     * Count of items per page
     */
    countPerPage: {
      type: Number,
      default: 25
    },
    /**
     * Current page list
     */
    currentPage: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      tableHead: ['Title', 'Completed']
    }
  },

  computed: {
    /**
     * Splitting the list into chunks
     */
    chunkList () {
      return this.list.slice(
        (this.currentPage - 1) * this.countPerPage,
        this.currentPage * this.countPerPage
      )
    }
  }
}
</script>

<style lang="scss">
.todo-list {
  border-collapse: collapse;
  width: 100%;

  &__th,
  &__td {
    border: 1px solid rgba(0,0,0, .2);
    padding: 5px;
  }

  &__th {
    text-align: left;
  }

  &__row {
    &_red {
      color: red;
    }

    &_green {
      color: green;
    }
  }
}
</style>
