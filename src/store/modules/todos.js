const state = {
	todos: [{
			id: Date.now() + 1,
			title: "Todo One",
			completed: false,
		},
		{
			id: Date.now() + 2,
			title: "Todo Two",
			completed: false,
		},
		{
			id: Date.now() + 3,
			title: "Todo Three",
			completed: false,
		},
	]
};

const getters = {
	getTodos: (state) => state.todos
};

const actions = {
	addTodo({
		commit
	}, todo) {
		commit('newTodo', todo)
	},

	deleteTodo({
		commit
	}, id) {
		commit('removeTodo', id);
	}
};

const mutations = {
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) => state.todos.splice(state.todos.findIndex(todo => todo.id === id), 1)
};

export default {
	state,
	getters,
	actions,
	mutations
}
