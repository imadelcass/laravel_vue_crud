<template>
    <div class="w-full shadow-md rounded-xl mb-2 pb-4">
        <form class="w-8/12 m-auto">
            <div class="flex flex-col">
                <div class="my-2 h-20">
                    <input
                        v-model="postBody"
                        class="h-full text-xl outline-none bg-transparent pl-2"
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex-1 flex">
                        <div class="mr-4">
                            <i class="fas fa-image fa-xl text-clrBlue"></i>
                        </div>
                        <div class="mr-4">
                            <i class="far fa-smile fa-xl text-clrBlue"></i>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            class="bg-csBlue px-3 py-2 text-white rounded"
                            v-on="
                                store.update.state
                                    ? { click: updatePost }
                                    : { click: addPost }
                            "
                        >
                            {{ store.update.state ? "Update" : "Post" }}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import { onMounted, ref, reactive, inject, provide, computed } from "vue";

export default {
    setup() {
        let postBody = ref("");
        const store = inject("store");
        const newPost = computed(() => {
            return {
                body: postBody.value,
                user_id: 3,
            };
        });
        async function addPost() {
            try {
                const req = await axios.post(
                    "http://127.0.0.1:8000/api/",
                    newPost.value
                );
                const res = await req.data;
                store.posts.unshift(res);
                postBody.value = "";
            } catch (error) {
                console.log(error);
            }
        }
        async function updatePost() {
            console.log("he from update post");
            store.update.state = false;
            console.log(postBody.value.value);
        }
        postBody.value = computed(() => {
            if (store.update.state) {
                return store.update.post.body;
            } else {
                return "";
            }
        });
        provide("store", store);

        return {
            addPost,
            updatePost,
            postBody,
            store,
        };
    },
};
</script>
