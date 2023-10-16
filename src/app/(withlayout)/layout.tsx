"use client"

import { Layout } from 'antd';
import Nav from '@/components/Home/Nav'
import Sidebar from '@/components/ui/Sidebar';
import Contents from '@/components/ui/Contents';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
  return (
    <>
    <Nav/>
    <Layout hasSider>
      <Sidebar/>
       <Contents>{children}</Contents>
    </Layout>
    </>
  );
};

export default DashboardLayout;