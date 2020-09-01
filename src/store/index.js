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
			let s = k.findIndex((s) => s.id == payload.id);
			k[s] = payload;

			state.blogContent = k;
			console.log(state.blogContent, "updated");
		},
	},
	plugins: [
		createPersistedState({
			paths: ["blogContent"],
		}),
	],
});
