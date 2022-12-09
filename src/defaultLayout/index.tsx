import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './defaultLayout.module.css';

const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Outlet />
        </div>)
}

export default DefaultLayout;