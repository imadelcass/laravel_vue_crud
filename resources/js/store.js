import { ref, reactive } from "vue";
// export const useStore = () => {
export const store = reactive({
    posts: {},
    update: {
        state: false,
        post: {},
    },
});
//     return { store };
// };
