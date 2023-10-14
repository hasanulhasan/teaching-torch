import { Badge, Button, Card, Col, Form, Row, Space } from "antd";
import Image from "next/image";
import BannerImg from './../../assets/banner.png'
import Title from "antd/es/typography/Title";

const Banner = () => {
  return (
    <div>
      <Row
    justify="center"
    align="middle"
    style={{
      minHeight: '80vh'
    }}>
    <Col sm={12} md={16} lg={10}>
      <Image src={BannerImg} alt="banner image" width={700}/>
    </Col>
    <Col sm={12} md={8} lg={8}>
      <h1 style={{
        margin: '15px 0px',
        fontSize: '45px',
        fontWeight: 'bolder'
      }}>Master the skill<br/>Drive your Career!</h1>
      <p style={{
        margin: '15px 0px',
        fontSize: '22px'
      }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem mollitia nobis doloribus eveniet saepe quos architecto</p>
      <Button
      style={{
        color: 'black',
        fontWeight: 'bolder'
      }} type="primary" size="large">View All Courses</Button>
    </Col>
  </Row>
    </div>
  );
};

export default Banner;