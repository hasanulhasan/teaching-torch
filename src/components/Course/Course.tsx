/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import IProduct from '@/Types/Global';
const { Meta } = Card;

const Course = ({course}: IProduct) => {
  const {_id, title, price, img, rating} = course;
  // console.log(course)

  const router = useRouter();
  const handleRoute = () => {
    router.push(`/${_id}`)
  }

  return (
    <Col sm={4} lg={6} 
    onClick={()=> handleRoute()}
    style={{
      marginTop: '15px'
    }}>
        <Card
        hoverable
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
  >
    <h1>{title}</h1>
    <p>Price : {price}</p>
    <Button>Details</Button>
   </Card>
  </Col>
  );
};

export default Course;