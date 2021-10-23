import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        posts: [],
        postUpdate: {
            state: false,
            post: {
                body: "",
            },
        },
    },
    mutations: {
        getPosts(state, posts) {
            return (state.posts = [...posts]);
        },
        addPost(state, post) {
            return (state.posts = [post, ...state.posts]);
        },
        updatePost(state, post) {
            return (state.posts[state.posts.findIndex((e) => e.id == post.id)] =
                post);
        },
        getPostToUpdate(state, post) {
            return (state.postUpdate = post);
        },
    },
    actions: {
        async getPosts({ commit }) {
            try {
                const req = await axios.get("http://127.0.0.1:8000/api/");
                const res = await req.data;
                commit("getPosts", res);
            } catch (error) {
                console.log(error);
            }
        },
        async addPost({ commit }, post) {
            try {
                const req = await axios.post(
                    "http://127.0.0.1:8000/api/",
                    post
                );
                const res = await req.data;
                commit("addPost", res);
            } catch (error) {
                console.log(error);
            }
        },
        async updatePost(state, { commit }) {
            try {
                const req = await axios.post(
                    `http://127.0.0.1:8000/api/update/${state.state.update.post.id}`,
                    state.state.update.post
                );
                const res = await req.data;
                commit("updatePost", res);
                // store.update.state = false;
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {},
    modules: {},
});
