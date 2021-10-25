<template>
    <div
        :class="createdNow ? 'bg-yellow-200' : 'bg-white'"
        class="flex flex-col w-full py-2 shadow-md rounded-xl mb-2"
    >
        <div class="flex justify-between px-4 h-16 items-center w-full">
            <div class="flex-1 flex h-full items-center">
                <div class="w-12 h-12 mr-2 rounded-full overflow-hidden">
                    <img class="w-full h-full" src="imad.jpg" alt="vector" />
                </div>
                <div class="flex flex-col">
                    <div>
                        <h4 class="text-lg font-semibold" @click="checkdate">
                            Imad elcass
                        </h4>
                    </div>
                    <div>
                        <p class="font-light text-gray-500">
                            {{ date }}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <i class="fas fa-ellipsis-h text-clrBlue"></i>
            </div>
        </div>
        <div class="flex flex-col">
            <p class="px-4 text-clrBlue">
                {{ post.body }}
            </p>
            <!-- <div>
                <img src="imad.jpg" alt="" srcset="">
            </div> -->
        </div>
        <div class="px-8">
            <div class="flex justify-between border-b border-gray-300 py-2">
                <div>115 like</div>
                <div>10 commentaires</div>
            </div>
            <div class="flex justify-between">
                <div>
                    <button @click="getPostToUpdate">Update</button>
                </div>
                <div>
                    <button @click="getPostToDelete">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
export default {
    props: {
        post: Object,
    },
    data() {
        return {
            date: null,
            createdNow: false,
        };
    },
    methods: {
        getPostToUpdate() {
            this.$store.commit("getPostToUpdate", {
                state: true,
                post: this.post,
            });
        },
        getPostToDelete() {
            this.$store.dispatch("deletePost", this.post);
        },
        // custom date with moment library
        updateDate() {
            return (this.date = moment(
                Date.parse(this.post.created_at)
            ).fromNow());
        },
    },
    mounted() {
        this.updateDate();
    },
    computed: {
        checkCreatedNow() {
            return this.$store.state.posts;
        },
    },
    watch: {
        checkCreatedNow(oldVal, newVal) {
            // if (Date.parse(this.post.updated_at) + 10000 > Date.now()) {
            //     console.log('hello');
            //     this.createdNow = true;
            //     setTimeout(() => {
            //         this.createdNow = false;
            //     }, 2000);
            // }
            // this.createdNow = true;
        },
    },
};
</script>
