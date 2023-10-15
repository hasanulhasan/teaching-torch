"use client"

import { Layout } from 'antd';
import { useState } from 'react';
import Loading from '../loading';
import Sidebar from '@/components/ui/Sidebar';
import Contents from '@/components/ui/Contents';

// const { Header, Footer } = Layout;

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if(!isLoading){
    return <Loading/>
  }

  return (
    <Layout hasSider>
      <Sidebar/>
       <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;