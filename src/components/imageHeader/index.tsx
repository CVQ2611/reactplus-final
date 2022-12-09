import doneImg from '../../access/img/Done.png';
import classNames from 'classnames/bind';
import styles from './imageHeader.module.css';

const cx = classNames.bind(styles);
function ImageHeader() {
    return (
        <img className={cx('image-header')} alt="headerImage" src={doneImg} />
    )
}

export default ImageHeader