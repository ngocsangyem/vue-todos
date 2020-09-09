const state = {
	todos: [{
			id: 1,
			title: "Todo One",
			completed: false,
		},
		{
			id: 2,
			title: "Todo Two",
			completed: false,
		},
		{
			id: 3,
			title: "Todo Three",
			completed: false,
		},
	]
};

const getters = {
	getTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations
}
