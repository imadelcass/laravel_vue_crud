<template>
    <div class="w-6/12 flex flex-col items-center m-auto">
        <add-post />
        <Post v-for="post in $store.state.posts" :key="post.id" :post="post" />
    </div>
</template>
<script>
import AddPost from "../components/AddPost.vue";
import Post from "../components/Post.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
    name: "Home",
    components: {
        AddPost,
        Post,
    },
    beforeCreate() {
        this.$store.dispatch("getPosts");
    },
};
</script>
