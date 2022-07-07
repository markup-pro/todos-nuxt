export const state = () => ({
  todoList: [],
  searchValue: ''
})

export const mutations = {
  setTodoList (state, data) {
    state.todoList = data
  },

  searchValue (state, value) {
    state.searchValue = value
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      commit('setTodoList', json)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  filterTodos: state => (value) => {
    return state.todoList.filter(el => el.title.includes(value))
  }
}
