'use client'
import { setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { HomeFilled, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import {  Menu, message } from "antd";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { auth } from "../Auth/Firebase";

function AppHeader() {
 
  const {user} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  const handleLogout = async ()=> {
    await signOut(auth).then(() => {
      dispatch(setUser(null))
      message.success('Logout Success')
    })
  }

  const onMenuClick = () => {
    // navigate(`/${item.key}`);
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
            label: <Link href={`/login`}>Login</Link>,
            key: "login",
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
            label: <button onClick={()=> handleLogout()}>Logout</button>,
            key: "Logout",
          },
          {
            label: "Category",
            key: "category",
            children: [
              {
                label: "Python Learning",
                key: "python learning",
              },
              {
                label: "Javascript Learning",
                key: "Javascript learning",
              }
            ],
          }
        ]}
      />
      <div className="flex">
      <ShoppingCartOutlined style={{fontSize: '28px'}}/>
      <Link href='/profile'><UserOutlined style={{fontSize: '28px', marginLeft: '10px',
      marginRight: '10px'
    }}/></Link>
      </div>
    </div>
  );
}

export default AppHeader;
