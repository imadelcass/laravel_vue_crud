<template>
    <div class="w-full shadow-md rounded-xl mb-2 pb-4">
        <form class="w-8/12 m-auto">
            <div class="flex flex-col">
                <div class="my-2 h-20">
                    <input
                        v-model="postBody"
                        class="
                            h-full
                            w-full
                            text-xl
                            outline-none
                            bg-transparent
                            pl-2
                        "
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
                        <!-- <button
                            type="button"
                            class="bg-csBlue px-3 py-2 text-white rounded"
                            v-on="
                                store.update.state
                                    ? { click: updatePost }
                                    : { click: addPost }
                            "
                        >
                            {{ store.update.state ? "Update" : "Post" }}
                        </button> -->
                        <button
                            type="button"
                            class="bg-csBlue px-3 py-2 text-white rounded"
                            @click="addPost"
                        >
                            post
                        </button>
                        <button
                            type="button"
                            class="bg-csBlue px-3 ml-2 py-2 text-white rounded"
                            @click="updatePost"
                        >
                            update
                        </button>

                        <!-- <button @click="tryFunc">try button</button> -->
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            postBody: this.$store.state.postUpdate.post.body,
        };
    },
    methods: {
        addPost() {
            this.$store.dispatch("addPost", {
                user_id: 3,
                body: this.postBody,
            });
        },
        updatePost() {
            this.$store.dispatch("updatePost", {
                id: 75,
                body: this.postBody,
            });
        },
    },

};
</script>
// setup() { // let postBody = ref(""); // const store = inject("store"); //
const newPost = computed(() => { // return { // body: postBody.value, //
user_id: 3, // }; // }); // watch(store, () => { // if (store.update.state) { //
postBody.value = store.update.post.body; // } else { // postBody.value = ""; //
} // }); // provide("store", store); // return { // addPost, // updatePost, //
postBody, // store, // }; // },
