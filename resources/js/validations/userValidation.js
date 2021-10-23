import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(3).max(10).required(),
    confirme_password: Yup.string()
        .required()
        .oneOf(
            [Yup.ref("password"), null],
            "The password and the confirmation must match"
        ),
});
