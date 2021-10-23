<template>
    <div class="m-auto lg:w-1/3 w-11/12 p-3 shadow-md rounded-xl">
        <div class="mt-10 w-full">
            <h1 class="text-center text-2xl">Register</h1>
            <form class="w-full mt-4" action="" @submit.prevent="loginUser">
                <div class="flex flex-col h-16 mb-2 relative">
                    <input
                        class="
                            w-full
                            outline-none
                            h-6
                            p-4
                            mb-2
                            shadow-md
                            rounded-xl
                        "
                        placeholder="Enter your email"
                        type="text"
                        v-model="user.email"
                    />
                    <div class="absolute text-red-400 -bottom-1 pl-4">
                        <div
                            v-for="error of vv.user.email.$silentErrors"
                            :key="error.$message"
                        >
                            <div>{{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col h-16 mb-2 relative">
                    <input
                        class="
                            w-full
                            outline-none
                            h-6
                            p-4
                            mb-2
                            shadow-md
                            rounded-xl
                        "
                        placeholder="password"
                        type="password"
                        v-model="user.password"
                    />
                    <div class="absolute text-red-400 -bottom-1 pl-4">
                        <div
                            v-for="error of vv.user.password.$silentErrors"
                            :key="error.$message"
                        >
                            <div>{{ error.$message }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4 mb-3">
                    <button
                        class="w-max px-4 py-2 rounded text-white bg-csBlue"
                    >
                        Login
                    </button>
                </div>
                <p class="mt-2">
                    Or, you do not have account ?
                    <router-link class="font-bold" to="/register">
                        Resister now
                    </router-link>
                </p>
            </form>
            <button @click="checkAuth">check auth</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { useRouter } from "vue-router";
import { required, email } from "@vuelidate/validators";
export default {
    data() {
        return {
            router: useRouter(),
            vv: useVuelidate(),
            user: {
                email: "",
                password: "",
            },
        };
    },
    validations() {
        return {
            user: {
                email: { required, email },
                password: { required },
            },
        };
    },
    methods: {
        async loginUser() {
            const formValid = await this.vv.$validate();
            if (formValid) {
                try {
                    const req = await axios.post(
                        "http://127.0.0.1:8000/api/login",
                        this.user
                    );
                    const res = await req.data;
                    console.log(res);
                    this.auth = res;
                    res.logged && this.router.push("/");
                } catch (error) {
                    console.log(error);
                }
            }
        },
        checkAuth() {
            console.log(this.auth);
        },
    },
};
</script>
