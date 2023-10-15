"use client"

import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;
import { sidebarItems } from '@/constant/sidebarItems';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const {role} = getUserInfo() as any;
  
  return (
    <Sider
     style={{
      overflow: 'auto',
      height: '100vh',
      position: 'sticky',
      left: 0,
      top: 0,
      bottom: 0
     }}
     width={280}
     collapsible
     collapsed={collapsed} 
     onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          PH-University
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems()} />
    </Sider>
  );
};

export default Sidebar;