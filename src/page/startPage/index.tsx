import ImageHeader from "../../components/imageHeader";
import { Row, Typography } from "antd";
import classNames from "classnames/bind";
import styles from './startPage.module.css'
import SubmitButton from "../../components/submitButton";
import Arrow from '../../access/img/Vector.png'

const cx = classNames.bind(styles)
const { Title, Text } = Typography;
function StartPage() {
    return (
        <>
            <Row style={{ paddingTop: '168px', marginBottom: '13px' }}>
                <ImageHeader />
            </Row>
            <Title className={cx('header-box')} level={5} >
                <Text style={{ fontSize: '16px', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '19px', }}>Welcome to</Text>
                <Text style={{ fontSize: '16px', display: 'block', color: 'rgba(0,0,0,1)', fontWeight: '400', lineHeight: '19px', }}>OUR REMINDER</Text>
            </Title>
            <Text className={cx('title-box')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
            </Text>
            <SubmitButton to='/register'>
                Get Start <img src={Arrow} alt={'arrow'} style={{ marginLeft: '12px' }} />
            </SubmitButton>
        </>
    )
}
export default StartPage;