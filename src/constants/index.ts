import * as yup from "yup";

export interface User {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export interface UserPost {
    name: string;
    email: string;
    password: string;
}

export interface UserGet {
    name: string;
    complated: boolean;
}

export interface Props {
    to: string;
    page: string;
}

export interface PropsButtonSubmit {
    to: string;
    children: any;
}

export const schemaCreate = yup.object().shape({
    name: yup.string().required('Please input your Full name')
        .test('fullName', 'Please input true your Full name', (name) => !!name && name.trim().length > 0),
    email: yup.string().email('Please input your true email').required('Please input your email'),
    password: yup.string().required('Please enter your password'),
    passwordConfirm: yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([yup.ref('password')]) : field
    ),
}).required();

export const schemaLogIn = yup.object().shape({
    email: yup.string().email('Please input your true email').required('Please input your email'),
    password: yup.string().required('Please email'),
}).required();

export const stylesInput = {
    height: '51px',
    fontSize: '13px',
    letterSpacing: '0.06em',
    borderRadius: '22px'
}