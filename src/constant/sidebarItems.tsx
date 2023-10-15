import { MenuProps } from "antd";
import {ProfileOutlined, TableOutlined} from "@ant-design/icons"
import Link from "next/link";

// import {USER_ROLE} from './role'

export const sidebarItems = () => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `/profile`,
        },
        {
          label: <Link href={`/change-password`}>Change Password</Link>,
          key: `/change-password`,
        },
      ]
    },
    {
      label: <Link href={`/manage-order`}>Manage Orders</Link>,
      icon: <TableOutlined />,
      key: `/manage-order`,
    },
  ];
  return defaultSidebarItems;
};
