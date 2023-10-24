/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Layout } from 'antd';
import Nav from '@/components/Home/Nav'
import Sidebar from '@/components/ui/Sidebar';
import Contents from '@/components/ui/Contents';
import { useEffect } from "react";
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const {user, isLoading} = useAppSelector(state => state.user)
  const router = useRouter();

  useEffect(() => {
    if(!user?.email && !isLoading){
      router.push('/login')
    }
  }, [user?.email])

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