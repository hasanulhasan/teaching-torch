/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { MenuProps } from "antd";
import {ProfileOutlined, TableOutlined} from "@ant-design/icons"
import Link from "next/link";

export const sidebarItems = (role: string) => {
  

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />
    },
    {
      label: <Link href={`/profile/manage-orders`}>Manage Orders</Link>,
      icon: <TableOutlined />,
      key: `/manage-order`,
    },
    {
      label: <Link href={`/profile/manage-feedback`}>Manage Feedback</Link>,
      icon: <TableOutlined />,
      key: `/manage-feedback`,
    },
  ];
  const adminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />
    },
    {
      label: <Link href={`/profile/manage-orders`}>Manage Orders</Link>,
      icon: <TableOutlined />,
      key: `/manage-order`,
    },
    {
      label: <Link href={`/profile/manage-feedback`}>Manage Feedback</Link>,
      icon: <TableOutlined />,
      key: `/manage-feedback`,
    },
    {
      label: <Link href={`/profile/manage-feedback`}>Logout</Link>,
      icon: <TableOutlined />,
      key: `/logout`,
    },
  ];
  
  if(role === 'admin'){
    return adminSideBarItems;
  }
  else{
    return defaultSidebarItems;
  }
  
};
