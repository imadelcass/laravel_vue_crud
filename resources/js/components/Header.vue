<template>
    <header
        class="
            sticky
            top-0
            flex
            h-20
            items-center
            justify-between
            px-4
            shadow-sm
            mb-3
            bg-white
        "
    >
        <div class="flex-1">
            <h2 class="text-lg font-medium">CRUD APP</h2>
        </div>
        <nav class="flex-1 flex justify-between">
            <a href="#">Home</a>
            <button @click="check">click</button>
            <a href="#">Login</a>
            <a href="#">Register</a>
        </nav>
    </header>
</template>

<script>
import { inject } from "vue";
export default {
    setup() {
        const store = inject("store");
        
        function check() {
            console.log(store.update.post.body);
        }
        return {
            check,
        };
    },
};
</script>
