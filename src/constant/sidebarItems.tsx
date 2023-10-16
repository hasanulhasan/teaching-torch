/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button, MenuProps, message } from "antd";
import {LogoutOutlined, ProfileOutlined, TableOutlined} from "@ant-design/icons"
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "@/components/Auth/Firebase";
import { setUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

export const sidebarItems = (role: string) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async ()=> {
    await signOut(auth).then(() => {
      dispatch(setUser(null))
      message.success('Logout Success')
      router.push('/')
    })
  }
  

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
    {
      label: <Button onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</Button>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
      key: `/logout`,
    }
  ];
  const adminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />
    },
    {
      label: <Link href={`/admin/manage-orders`}>Customer Orders</Link>,
      icon: <TableOutlined />,
      key: `/manage-order`,
    },
    {
      label: <Link href={`/admin/manage-feedback`}>User Feedbacks</Link>,
      icon: <TableOutlined />,
      key: `/manage-feedback`,
    },
    {
      label: <Link href={`/admin/manage-users`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/manage-users`,
    },
    {
      label: <Button onClick={()=> handleLogout()} style={{color: 'red'}}>Logout</Button>,
      icon: <LogoutOutlined style={{color: 'red'}} />,
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
