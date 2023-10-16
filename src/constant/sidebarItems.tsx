import { MenuProps } from "antd";
import {ProfileOutlined, TableOutlined} from "@ant-design/icons"
import Link from "next/link";

export const sidebarItems = () => {
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
  return defaultSidebarItems;
};
