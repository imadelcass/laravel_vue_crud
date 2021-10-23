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
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
            <button @click="check">click</button>
        </nav>
    </header>
</template>
<script>
export default {
    methods: {
        check() {
            // this.$store.dispatch("getPosts");
            console.log(this.$store.state.postUpdate);
        },
    },
};
</script>
