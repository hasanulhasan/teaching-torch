'use client'
import { HomeFilled } from "@ant-design/icons";
import {  Menu } from "antd";
import Link from "next/link";

function AppHeader() {

  const onMenuClick = () => {
    // navigate(`/${item.key}`);
  };

  return (
    <div>
      <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <Link href={`/`}><HomeFilled /> Teaching Torch</Link>,
            key: "/",
          },
          {
            label: <Link href={`/login`}>Login</Link>,
            key: "login",
          },
          {
            label: "Courses",
            key: "courses",
            children: [
              {
                label: "Python Learning",
                key: "python learning",
              },
              {
                label: "Javascript Learning",
                key: "Javascript learning",
              },
              {
                label: "Java Learning",
                key: "java learning",
              },
            ],
          }
        ]}
      />
    </div>
  );
}

export default AppHeader;
