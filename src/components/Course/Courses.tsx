'use client'
import { Row } from "antd";
import Course from "./Course";
import { useGetProductsQuery } from "@/redux/features/api";
import Loading from "@/app/loading";
import IProduct from "@/Types/Global";

// const courses = [
//   {
//     title: 'JavaScript Learning',
//     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     price: '200',
//     category: 'programming',
//     seat: '100',
//     rating: '4',
//     status: true,
//     description: 'This is description of the course',
//     features: ['8 weeks plan', 'Group Studey', 'Live and Recorded class'],
//     reviews: ['This is first review', 'This is second']
//   },
//   {
//     title: 'Python Learning',
//     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     price: '200',
//     category: 'programming',
//     seat: '100',
//     rating: '4',
//     status: true,
//     description: 'This is description of the course',
//     features: ['8 weeks plan', 'Group Studey', 'Live and Recorded class'],
//     reviews: ['This is first review', 'This is second']
//   },
//   {
//     title: 'Java Learning',
//     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     price: '200',
//     category: 'programming',
//     seat: '100',
//     rating: '4',
//     status: true,
//     description: 'This is description of the course',
//     features: ['8 weeks plan', 'Group Studey', 'Live and Recorded class'],
//     reviews: ['This is first review', 'This is second']
//   },
//   {
//     title: 'Java Learning',
//     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     price: '200',
//     category: 'programming',
//     seat: '100',
//     rating: '4',
//     status: true,
//     description: 'This is description of the course',
//     features: ['8 weeks plan', 'Group Studey', 'Live and Recorded class'],
//     reviews: ['This is first review', 'This is second']
//   },
//   {
//     title: 'Java Learning',
//     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     price: '200',
//     category: 'programming',
//     seat: '100',
//     rating: '4',
//     status: true,
//     description: 'This is description of the course',
//     features: ['8 weeks plan', 'Group Studey', 'Live and Recorded class'],
//     reviews: ['This is first review', 'This is second']
//   },
// ]

const Courses = () => {
  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data
// console.log(data?.data)

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Book</p>;
  if (!isLoading && !isError && courses?.length > 0) {content = courses.map(course => <Course key={course._id} course={course} />)}

  return (
    <div style={{
      margin: '20px 10%',
    }}>
      <div style={{
        margin: '30px auto',
      }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}>Explore Popular Courses</h1>
      </div>
      <Row gutter={24}>
        {
          content
        }
       </Row>
    </div>
  );
};

export default Courses;