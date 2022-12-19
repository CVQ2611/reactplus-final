import { Button, Form, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './formRegister.module.css';
import { schemaCreate, stylesInput, User } from "../../constants";
import { createUser } from "../../services/postUser";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const { Text } = Typography;
const cx = classNames.bind(styles)

function FormRegister() {
    const [succes, setSucces] = useState<boolean>(false)
    const [errorMess, setErrorMess] = useState<boolean>(false)
    const { handleSubmit, control, formState: { errors } } = useForm<User>({
        mode: 'onSubmit',
        resolver: yupResolver(schemaCreate)
    })

    const onCreateUser = (data: User) => {
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        const postUserData = async () => {
            try {
                const res = await createUser(userData)
                setSucces(true)
                return res
            } catch (error) {
                setErrorMess(true)
            }
        }
        postUserData()
    }

    return (
        <Form style={{ width: '100%', padding: '0 20px' }} onFinish={handleSubmit(onCreateUser)}>
            <Form.Item>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder={'Enter your full name'} />}
                />
                {errors.name && <Text type="danger">{errors.name.message}</Text>}
            </Form.Item>
            <Form.Item>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder={'Enter your email'} />}
                />
                {errors.email && <Text type="danger">{errors.email.message}</Text>}
            </Form.Item>
            <Form.Item>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder={'Enter your password'} />}
                />
                {errors.password && <Text type="danger">{errors.password.message}</Text>}
            </Form.Item>
            <Form.Item>
                <Controller
                    name="passwordConfirm"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder={'Confirm Password'} />}
                />
                {errors.passwordConfirm && <Text type="danger">{errors.passwordConfirm.message}</Text>}
            </Form.Item>
            <Button htmlType="submit" className={cx('start-button')} type={'text'}>Register</Button>
            {succes && <Navigate to={'/login'} />}
            {errorMess && <Text type="danger">Có lỗi sảy ra bạn thử lại sau nhé!</Text>}
        </Form>
    )
}

export default FormRegister;