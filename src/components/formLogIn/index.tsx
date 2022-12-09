import { yupResolver } from "@hookform/resolvers/yup"
import { Typography } from "antd";
import { Button, Form, Input } from "antd"
import { Controller, useForm } from "react-hook-form"
import { schemaLogIn, stylesInput, User } from "../../constants"
import classNames from "classnames/bind";
import styles from './formLogin.module.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
const { Text } = Typography;
const cx = classNames.bind(styles)

function FormLogIn() {
    const [succes, setSucces] = useState<boolean>(false)
    const { handleSubmit, control, formState: { errors } } = useForm<User>({
        mode: 'onSubmit',
        resolver: yupResolver(schemaLogIn)
    })

    const onUserLogIn = (data: User) => {
        setSucces(true)
        return data;
    }

    return (
        <Form style={{ width: '100%', padding: '0 20px' }} onFinish={handleSubmit(onUserLogIn)}>
            <Form.Item>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder='Enter your email' />}
                />
                {errors.email && <Text type="danger">{errors.email.message}</Text>}
            </Form.Item>
            <Form.Item>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <Input {...field} style={stylesInput} placeholder='Enter your password' />}
                />
                {errors.password && <Text type="danger">{errors.password.message}</Text>}
            </Form.Item>
            <Button htmlType="submit" className={cx('start-button')} type={'text'}>Sign In</Button>
            {succes && <Navigate to='/dashboard' />}
        </Form>
    )
}

export default FormLogIn