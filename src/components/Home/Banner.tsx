import { Col, Row} from "antd";
import Image from "next/image";
import BannerImg from './../../assets/banner.png'
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <Row
    justify="center"
    align="middle"
    style={{
      minHeight: '100vh'
    }}>
    <Col sm={12} md={16} lg={10}>
      <Image src={BannerImg} alt="banner image" width={700}/>
    </Col>
    <Col style={{margin: '0px 10px'}} sm={12} md={8} lg={8}>
      <h1 style={{
        margin: '15px 0px',
        fontSize: '45px',
        fontWeight: 'bolder'
      }}>Master the skill<br/>Drive your Career!</h1>
      <p style={{
        margin: '15px 0px',
        fontSize: '22px'
      }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem mollitia nobis doloribus eveniet saepe quos architecto</p>
      <Link className="flex mb-4" href='/courses'><button className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">View All Courses</button></Link>
    </Col>
  </Row>
    </div>
  );
};

export default Banner;