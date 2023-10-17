'use client'

import { useAppSelector } from "@/redux/hooks";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";

function AppHeader() {
  const {user} = useAppSelector(state => state.user)

  const onMenuClick = () => {
  };

  return (
    <div className="flex justify-between h-16 items-center shadow-lg lg:px-10">
      <Menu
        style={{border: 'none'}}
        className="w-full"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <Link className="text-lg font-bold" href={`/`}>Teaching Torch</Link>,
            key: "/",
          },
          {
            label: <Link href={`/feedback`}>Feedback</Link>,
            key: "feedback",
          },
          {
            label: <Link href={`/courses`}>Courses</Link>,
            key: "courses",
          },
          {
            label: "Category",
            key: "category",
            children: [
              {
                label: "Programming",
                key: "Programming",
              },
              {
                label: "Graphics",
                key: "Graphics",
              },
              {
                label: "Marketing",
                key: "Marketing",
              },
              {
                label: "Video",
                key: "Video",
              }
            ],
          },
          {
            label: <input placeholder='Search Course' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>,
            key: "search",
          },
        ]}
      />
      
      {
        user?.email? <>
        <div className="flex">
      <Link href='/orders' className="cursor-pointer"><ShoppingCartOutlined style={{fontSize: '28px'}}/></Link>
      <Link href='/profile'><UserOutlined style={{fontSize: '28px', paddingLeft: '10px',
      paddingRight: '10px'
    }}/></Link>
      </div>
        </> : <>
        <div>
      <Link className="flex" href='/login'><button className="inline-block m-2 px-4 py-2 outline outline-offset-1 outline-blue-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:text-white">Login</button></Link>
      </div>
        </>
      }
    </div>
  );
}

export default AppHeader;
