"use client"

import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;
import { sidebarItems } from '@/constant/sidebarItems';
import { useAppSelector } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/features/api";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {user, isLoading, isError} = useAppSelector(state=> state.user)
  const {data, isLoading:dbUserLoading, isError: dbUserIsError} = useGetUsersQuery(null)
  const allUsers = data?.data
  let role:string

  if (!isLoading && !isError && !dbUserLoading && !dbUserLoading && user?.email && allUsers?.length > 0){
    allUsers.filter( dbUser => {
      if(dbUser.email === user?.email && dbUser.role === 'admin'){
        role = 'admin'
      }else{
        role = 'user'
      }
  })}
  
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
          fontSize: '1.5rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: '1rem'
        }}>
          Dashboard
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
    </Sider>
  );
};

export default Sidebar;