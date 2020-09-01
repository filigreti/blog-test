import Vue from "vue";
import Vuex from "vuex";
import blogContent from "../helpers/data";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		blogContent,
		editContent: null,
	},

	getters: {
		getContent: (state) => state.blogContent,
	},

	mutations: {
		deletePost(state, payload) {
			let k = state.blogContent.indexOf(payload);
			console.log(k);
			state.blogContent.splice(k, 1);
		},

		addToBlog(state, payload) {
			state.blogContent.unshift(payload);
		},

		editPost(state, payload) {
			let k = [...state.blogContent];
			k[payload.id - 1] = payload;
			console.log(k, "new");
			state.blogContent = k;
			console.log(state.blogContent, "updated");

			// console.log(state.blogContent[payload.id - 1], "lets");
		},
	},
	plugins: [
		createPersistedState({
			paths: ["blogContent"],
		}),
	],
});
