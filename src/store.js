import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allUsers: [{
				userId: 'mike00',
				password: '123',
				name: 'Mike',
				address: 'France',
				src: 'https://www.flaticon.com/svg/static/icons/svg/145/145867.svg'
			},
			{
				userId: 'jane00',
				password: '456',
				name: 'Jane',
				address: 'Spain',
				src: 'https://www.flaticon.com/svg/static/icons/svg/145/145866.svg'
			},
			{
				userId: 'alice00',
				password: '789',
				name: 'Alice',
				address: 'Portugal',
				src: 'https://www.flaticon.com/svg/static/icons/svg/145/145852.svg'
			}
		]
	},
	getters: {
		allUsersCount: function(state) {
			return state.allUsers.length;
		},
		countFrance: state => {
			let count = 0;
			state.allUsers.forEach((item, i) => {
				if (item.address === 'France') {
					count++;
				}
			});
			return count;
		},
		percentFrance: (state, getters) => {
			return Math.round(getters.countFrance / getters.allUsersCount * 100)+'%';
		},
	},
	mutations: {
      addUsers: (state, userObj) => {
         state.allUsers.push(userObj);
      }
	},
	actions: {
      addUsers: ({ commit }, userObj) => {
         commit('addUsers', userObj);
      }
	}
});
