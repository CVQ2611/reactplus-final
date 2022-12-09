import { Row } from "antd";
import ImageHeader from "../../components/imageHeader";
import classNames from "classnames/bind";
import styles from './logInPage.module.css';
import { Typography } from "antd";
import FormLogIn from "../../components/formLogIn";
import Label from "../../components/label";
const cx = classNames.bind(styles)
const { Title, Text } = Typography;

function LogInPage() {
    return (
        <>
            <Row className={cx('header-image')}>
                <ImageHeader />
            </Row>
            <Title className={cx('header-box')} level={5} >
                <Text style={{ fontSize: '24px', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '28px', }}>Get’s things done</Text>
                <Text style={{ fontSize: '24px', display: 'block', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '28px', }}>with TODO</Text>
            </Title>
            <Row >
                <FormLogIn />
            </Row>
            <Label to="/register" page="Sign Up" />
        </>
    )
}

export default LogInPage;