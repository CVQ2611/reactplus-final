import { Avatar, Button, Checkbox, Image, Row, Typography } from "antd";
import classNames from "classnames/bind"
import { useEffect, useState } from "react";
// import { UserGet } from "../../constants";
import { getData } from "../../services/getUserData";
import styles from './dashboardPage.module.css';
import AvatarUser from '../../access/img/Group-4.png';
import Clock from '../../access/img/Group-7.png';
import button from '../../access/img/plus-circle.png';
import moment from "moment";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
const { Title, Text } = Typography;

function DashboardPage() {
    const [todoLists, setTodoLists] = useState([])

    useEffect(() => {
        const getUserData = async () => {
            const res = await getData()
            setTodoLists(res.data)
            return res.data;
        }
        getUserData()
    }, [])
    return (
        <>
            <Row style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={AvatarUser} className={cx('avatar')} />
                <Title level={5} style={{ letterSpacing: '0.05em', marginBottom: '0' }}>Monica Gamage</Title>
                <Text style={{ display: 'block', marginBottom: '12px', color: '#D8605B' }}>@monicagamage</Text>
                <Button style={{ backgroundColor: '#F4C27F', borderRadius: '50px', marginBottom: '44px' }}>
                    <Link to={'/login'} style={{ textDecoration: 'none', color: '#000000' }}>Log Out</Link>
                </Button>
            </Row>
            <Row style={{ backgroundColor: 'white', flexDirection: 'column' }}>
                <Image src={Clock} style={{ display: 'block', width: '120px', height: '120px', margin: '32px auto 0' }} preview={false} />
                <Title style={{ fontSize: '12px', lineHeight: '14px', letterSpacing: '0.06em', textAlign: 'center' }}>Good Afternoon</Title>
                <Row style={{ flexDirection: 'column' }}>
                    <Title style={{ fontSize: '18px', lineHeight: '14px', letterSpacing: '0.06em', margin: '0 0 20px 20px' }}>Tasks List</Title>
                    <div className={cx('box-list')}>
                        <div className={cx('list-header')}>
                            <Text>Tasks List </Text>
                            <Image src={button} />
                        </div>
                        <div className={cx('list')} >
                            {todoLists.map((item: any) => {
                                return (
                                    <Title key={item.id} style={{ margin: '0' }}>
                                        <Checkbox checked={item.completed} >
                                            <Text>{item.name} {moment(item.createAt).format('hh A')}</Text>
                                        </Checkbox>
                                    </Title>
                                )
                            })}
                        </div>
                    </div>
                </Row>
            </Row>

        </>
    )
}

export default DashboardPage