/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetOrdersQuery } from "@/redux/features/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Divider, Menu } from "antd";
import Link from "next/link";
import IOrder from '@/Types';
import IProduct from "@/Types";
import { useGetProductsQuery } from "@/redux/features/productApi";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AppHeader() {
  const {data:CourseData} = useGetProductsQuery(undefined);
  const courses:IProduct[] = CourseData?.data!
  const {user, isLoading:userIsLoading} = useAppSelector(state => state.user)
  const {data, isLoading, isError} = useGetOrdersQuery(null);
  const orders: IOrder[] = data?.data
  const [searchCourse, setSearchCourse] = useState([]);
  const router = useRouter();
  const handleRoute = (_id:string) => {
    router.push(`/${_id}`)
  }

  let totalOrder:number = 0;
  if (!isLoading && !userIsLoading && !isError && orders?.length > 0) { 
    orders.filter(order => {
        if(order.userEmail === user?.email){
          totalOrder = totalOrder + 1
        }
    })
  }

  const handleSearch = (data:string) => {
    const result:IProduct[] = courses.filter(course => {
      return data && course && course.title.toLowerCase().includes((data).toLowerCase())
    })
    /* @ts-ignore */
    setSearchCourse(result!)
  };

  return (
    <div className="flex justify-between h-16 items-center shadow-lg lg:px-10">
      <Menu
        style={{border: 'none'}}
        className="w-full"
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
            label: <div>
              <input onChange={(e)=> handleSearch(e.target.value)} placeholder='Search Course' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
              <div className="absolute bg-gray-200 mt-2">
                {
                  searchCourse?.map((newCourse,i) => <div
                  /* @ts-ignore */
                  onClick={()=> handleRoute(newCourse._id)} 
                  className="text-black flex px-2 items-center hover:bg-gray-300" 
                  key={i}>
                    {/* @ts-ignore */}
                    <img className="h-4" src={newCourse.img} alt={newCourse.title}></img>
                    {/* @ts-ignore */}
                    <p className="ml-2 mr-2">{newCourse.title}</p>
                  </div>)
                }
              </div>
            </div>,
            key: "search",
          },
        ]}
      />
      
      {
        user?.email? <>
        <div className="flex">
        <Badge count={totalOrder} size="small" color="blue">
          <Link href='/orders' className="cursor-pointer"><ShoppingCartOutlined style={{fontSize: '28px'}}/></Link>
       </Badge>
        <Link href='/profile'><UserOutlined style={{fontSize: '28px', paddingLeft: '10px',
        paddingRight: '10px'
      }}/>
      </Link>
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
