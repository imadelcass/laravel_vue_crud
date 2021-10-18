<template>
    <div class="flex flex-col w-full py-2 shadow-md rounded-xl mb-2">
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
                    <button @click="updatePost">Update</button>
                </div>
                <div>
                    <button @click="deletePost">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
import { inject, provide } from "vue";
import axios from "axios";

export default {
    props: {
        post: Object,
    },
    setup(props) {
        // custom date with moment library
        const date = moment(Date.parse(props.post.created_at)).fromNow();
        // grab store
        const store = inject("store");
        async function deletePost() {
            try {
                const res = await axios.delete(
                    `http://127.0.0.1:8000/api/delete/${props.post.id}`
                );
                store.posts = store.posts.filter(
                    (post) => post.id !== res.data.id
                );
            } catch (error) {
                console.log(error);
            }
        }
        async function updatePost() {
            store.update = {
                state: true,
                post: props.post,
            };
        }
        return {
            date,
            deletePost,
            updatePost,
        };
    },
};
</script>
