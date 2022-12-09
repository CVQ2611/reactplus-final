import { Button } from "antd";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './submitButton.module.css';
import { PropsButtonSubmit } from "../../constants";

const cx = classNames.bind(styles)

function SubmitButton(props: PropsButtonSubmit) {
    return (
        <Button htmlType="submit" className={cx('start-button')} type={'text'}>
            <Link to={props.to} className={cx('start-link')}>{props.children}</Link>
        </Button>
    )
}

export default SubmitButton;