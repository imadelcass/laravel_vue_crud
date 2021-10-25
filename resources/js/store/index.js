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
                post)(
                (state.postUpdate = {
                    state: false,
                    post: {
                        body: "",
                    },
                })
            );
        },
        getPostToUpdate(state, post) {
            return (state.postUpdate = post);
        },
        deletePost(state, post) {
            // return state.posts.splice(
            //     state.posts.findIndex((e) => e.id === post.id),
            //     1
            // );
            return (state.posts = state.posts.filter((p) => p.id !== post.id));
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
        async updatePost({ commit }, post) {
            try {
                const req = await axios.post(
                    `http://127.0.0.1:8000/api/update/${post.id}`,
                    post
                );
                const res = await req.data;
                commit("updatePost", res);
                // store.update.state = false;
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        async deletePost({ commit }, post) {
            try {
                const req = await axios.delete(
                    `http://127.0.0.1:8000/api/delete/${post.id}`
                );
                const res = await req.data;
                commit("deletePost", res);
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {},
    modules: {},
});
