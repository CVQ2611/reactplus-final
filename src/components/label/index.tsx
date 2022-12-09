import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './label.module.css';
import { Props } from "../../constants";

const { Title, Text } = Typography;
const cx = classNames.bind(styles)

function Label(props: Props) {
    return (
        <Title className={cx('label')}>
            <Text>Already have an account ?</Text>
            <Button type="text">
                <Link to={props.to} style={{ color: '#D8605B', fontWeight: '400', fontSize: '14px' }}>
                    {props.page}
                </Link>
            </Button>
        </Title>
    )
};

export default Label;