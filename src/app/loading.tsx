import React from 'react';
import { Alert, Space, Spin } from 'antd';

const Loading = () => {
  return (
    <Space direction="vertical" style={{ width: '100%', marginTop: '300px' }}>
    <Spin tip="Loading..." size="large">
        <div className="content" />
      </Spin>
  </Space>
  )
}

export default Loading