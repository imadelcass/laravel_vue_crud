<template>
    <div class="w-full shadow-md rounded-xl mb-2 pb-4">
        <form class="w-8/12 m-auto">
            <div class="flex flex-col">
                <div class="my-2 h-20">
                    <input
                        v-model="post.body"
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
                        <button
                            type="button"
                            class="bg-csBlue px-3 py-2 text-white rounded"
                            v-on="
                                $store.state.postUpdate.state
                                    ? { click: updatePost }
                                    : { click: addPost }
                            "
                        >
                            {{
                                $store.state.postUpdate.state
                                    ? "Update"
                                    : "Post"
                            }}
                        </button>
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
            post: {
                body: "",
            },
        };
    },
    methods: {
        addPost() {
            this.$store.dispatch("addPost", {
                user_id: 3,
                body: this.post.body,
            });
            this.post = {
                body: "",
            };
        },
        updatePost() {
            this.$store.dispatch("updatePost", this.post);
        },
    },
    //trigger func to update postBody if the state is changing.
    computed: {
        checkPostBodyChange() {
            return this.$store.state.postUpdate;
        },
    },
    watch: {
        checkPostBodyChange(newVal, oldVal) {
            this.post = newVal.post;
            // console.log(newVal.post.body);
        },
    },
};
</script>
