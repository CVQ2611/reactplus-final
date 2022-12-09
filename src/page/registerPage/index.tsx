import ImageHeader from "../../components/imageHeader";
import classNames from "classnames/bind";
import styles from './registerPage.module.css';
import { Row, Typography } from "antd";
import FormRegister from "../../components/formRegister";
import Label from "../../components/label";

const cx = classNames.bind(styles)
const { Title, Text } = Typography;

function RegisterPage() {
    return (
        <>
            <Row className={cx('header-image')}>
                <ImageHeader />
            </Row>
            <Title className={cx('header-box')} level={5} >
                <Text style={{ fontSize: '24px', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '28px', }}>Get’s things done</Text>
                <Text style={{ fontSize: '24px', display: 'block', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '28px', }}>with TODO</Text>
            </Title>
            <Text className={cx('title-box')}>
                Let’s help you meet up your tasks
            </Text>
            <Row >
                <FormRegister />
            </Row>
            <Label to='/login' page='Sign In' />
        </>
    )
}
export default RegisterPage;