import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string().required('Password is required')
});

export { loginValidationSchema };
