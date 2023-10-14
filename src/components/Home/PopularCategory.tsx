import { Card, Col, Row } from 'antd';
import React from 'react';

const PopularCategory = () => {
  return (
    <div style={{
      margin: '20px 5%'
    }
    }>
       <Row gutter={24}>
        <Col span={8}>
        <h1 style={{
        margin: '0px 20px',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}>Our Popular <br/> Courses</h1>
        </Col>
        <Col span={16}>
        <Row gutter={24}>
    <Col span={6}>
      <Card title="Programming" bordered={false}>
      Programming
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Graphics" bordered={false}>
      Graphics
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Video" bordered={false}>
      Video
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Video" bordered={false}>
      Video
      </Card>
    </Col>
  </Row>
        </Col>
       </Row>
    </div>
  );
};

export default PopularCategory;