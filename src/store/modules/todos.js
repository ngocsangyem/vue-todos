const state = {
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
	getTodos: state => state.todos
};

const actions = {
	addTodo({ commit }, todo) {
		commit('newTodo', todo);
	},

	deleteTodo({ commit }, id) {
		commit('removeTodo', id);
	}
};

const mutations = {
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
	state,
	getters,
	actions,
	mutations
};
