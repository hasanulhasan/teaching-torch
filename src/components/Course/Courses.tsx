'use client'
import { Row } from "antd";
import Course from "./Course";
import { useGetProductsQuery } from "@/redux/features/api";
import Loading from "@/app/loading";
import IProduct from "@/Types/Global";

const Courses = () => {
  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data!

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Course</p>;
  if (!isLoading && !isError && courses?.length > 0) {content = courses.map(course => <Course key={course._id} course={course} />)}

  return (
    <section className="flex items-center bg-gray-100 py-10 font-poppins dark:bg-gray-900 ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="mb-14 text-center">
                <h1 className="mb-4 text-3xl font-bold dark:text-white"> Our Popular Courses </h1>
                <p className="max-w-xl mx-auto text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                  content
                }
            </div>
        </div>
    </section>
  );
};

export default Courses;