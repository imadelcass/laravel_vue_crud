<template>
    <div class="m-auto lg:w-1/3 w-11/12 p-3 shadow-md rounded-xl">
        <div class="mt-10 w-full">
            <h1 class="text-center text-2xl">Register</h1>
            <form class="w-full mt-4" action="" @submit.prevent="registerUser">
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
                        placeholder="Enter your name"
                        type="text"
                        v-model="user.name"
                    />
                    <div class="absolute text-red-400 -bottom-1 pl-4">
                        <div
                            v-for="error of vv.user.name.$silentErrors"
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
                <div class="flex flex-col h-16 mb-2 relative">
                    <input
                        class="
                            w-full
                            outline-none
                            h-6
                            mb-2
                            shadow-md
                            rounded-xl
                            p-4
                        "
                        placeholder="Repeat password"
                        type="password"
                        v-model="user.confirme_password"
                    />
                    <div class="absolute text-red-400 top-12 pl-4">
                        <div
                            v-for="error of vv.user.confirme_password
                                .$silentErrors"
                            :key="error.$message"
                        >
                            <div>{{ error.$message }}</div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-5 mb-3">
                    <button
                        class="w-max px-4 py-2 rounded text-white bg-csBlue"
                        
                    >
                        Register
                    </button>
                </div>
                <p class="mt-2">
                    Or, you do have account ?
                    <router-link class="font-bold" to="/login">
                        login now
                    </router-link>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { useRouter } from "vue-router";
import {
    required,
    email,
    minLength,
    maxLength,
    sameAs,
} from "@vuelidate/validators";
export default {
    data() {
        return {
            router: useRouter(),
            vv: useVuelidate(),
            user: {
                name: "",
                email: "",
                password: "",
                confirme_password: "",
            },
        };
    },
    validations() {
        return {
            user: {
                name: { required, maxLength: maxLength(10) },
                email: { required, email },
                password: { required, minLength: minLength(5) },
                confirme_password: {
                    required,
                    sameAs: sameAs(this.user.password),
                },
            },
        };
    },
    methods: {
        async registerUser() {
            const formValid = await this.vv.$validate();
            if (formValid) {
                try {
                    const req = await axios.post(
                        "http://127.0.0.1:8000/api/register",
                        this.user
                    );
                    const res = await req.data;
                    console.log(res);
                    res.sucess && this.router.push("/login");
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
};
</script>
