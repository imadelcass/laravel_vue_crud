<template>
    <div class="">
        <Header />
        <div class="w-6/12 flex flex-col items-center m-auto">
            <add-post />
            <Post v-for="post in store.posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import AddPost from "../components/AddPost.vue";
import Post from "../components/Post.vue";
import axios from "axios";
import { store } from "../store";
import { onMounted, ref, reactive, provide } from "vue";
export default {
    components: {
        Header,
        AddPost,
        Post,
    },
    setup() {
        const getPosts = async () => {
            try {
                const req = await axios.get("http://127.0.0.1:8000/api/");
                const res = await req.data;
                return res;
            } catch (error) {
                console.log(error);
            }
        };
        onMounted(async () => {
            store.posts = await getPosts();
        });
        // make store global
        provide("store", store);
        return { store };
    },
};
</script>
