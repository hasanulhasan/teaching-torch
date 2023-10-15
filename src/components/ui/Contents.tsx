"use client"
import { Layout } from 'antd';
const { Content} = Layout;

const Contents = ({children}: {children: React.ReactNode}) => {
  return (
    <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#ffffff', color: 'black'}}>
            {children}
          </div>
    </Content>
  );
};

export default Contents;