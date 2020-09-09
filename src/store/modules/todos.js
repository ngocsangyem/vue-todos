const state = {
	filter: 'all',
	todos: [
		{
			id: Date.now() + 1,
			title: 'Todo One',
			completed: false,
			editing: false
		},
		{
			id: Date.now() + 2,
			title: 'Todo Two',
			completed: false,
			editing: false
		},
		{
			id: Date.now() + 3,
			title: 'Todo Three',
			completed: false,
			editing: false
		}
	]
};

const getters = {
	getTodos: state => {
		if (state.filter == 'all') {
			return state.todos;
		} else if (state.filter == 'active') {
			return state.todos.filter(todo => !todo.completed);
		} else if (state.filter == 'completed') {
			return state.todos.filter(todo => todo.completed);
		}
		return state.todos;
	}
};

const actions = {
	addTodo({ commit }, todo) {
		commit('newTodo', todo);
	},

	deleteTodo({ commit }, id) {
		commit('removeTodo', id);
	},

	updateFilter({ commit }, filter) {
		commit('updateFilter', filter);
	}
};

const mutations = {
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter(todo => todo.id !== id)),
	updateFilter: (state, filter) => (state.filter = filter)
};

export default {
	state,
	getters,
	actions,
	mutations
};
