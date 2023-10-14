import { Card, Col, Row } from 'antd';
import React from 'react';

const Reviews = () => {
  return (
    <div>
      <div>
      <div style={{ margin: '20px 20%'}}>
      <div style={{ margin: '20px auto',}}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}>What Our Students Saying</h1>
      </div>

      <Row gutter={16}>
    <Col span={8}>
      <Card title="Jhon Doe" bordered={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio, quos nam facere vel repudiandae consequatur nisi consequuntur labore? Nisi ex sunt minus asperiores autem distinctio officia expedita tenetur? Assumenda?
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Jhon Doe" bordered={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio, quos nam facere vel repudiandae consequatur nisi consequuntur labore? Nisi ex sunt minus asperiores autem distinctio officia expedita tenetur? Assumenda?
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Jhon Doe" bordered={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio, quos nam facere vel repudiandae consequatur nisi consequuntur labore? Nisi ex sunt minus asperiores autem distinctio officia expedita tenetur? Assumenda?
      </Card>
    </Col>
  </Row>
      
    </div>
    </div>
    </div>
  );
};

export default Reviews;