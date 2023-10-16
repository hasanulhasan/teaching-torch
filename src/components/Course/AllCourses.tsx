'use client'
import Course from "./Course";
import { useGetProductsQuery } from "@/redux/features/api";
import Loading from "@/app/loading";
import IProduct from "@/Types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { priceSort, searchParam, sortType } from "@/redux/features/filterSlice";

const AllCourses = () => {
  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data!

  const {search, sort, price} = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch();

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Course</p>;
  if (!isLoading && !isError && courses?.length > 0) {
    content = courses.filter((course: IProduct) => {
      if (sort === 'Programming') {
        return (course.category === sort)
      }
      else if (sort === 'Graphics') {
        return (course.category === sort)
      }
      else if (sort === 'Video') {
        return (course.category === sort)
      }
      else if (sort === 'Marketing') {
        return (course.category === sort)
      }
      else {
        return course
      }
    }).sort((a, b) => {
      if (price === 'asc') { return (Number(a.price) - Number(b.price)) }
      else if (price === 'dec') { return (Number(b.price) - Number(a.price))  }
      else { return 0 }
    }).filter(course => course.title.toLowerCase().includes(search.toLowerCase())).map(course => <Course key={course._id} course={course} />)}

  return (
    <section className="flex items-center bg-gray-100 py-10 font-poppins dark:bg-gray-900 ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="mb-14 text-center">
                <h1 className="mb-4 text-3xl font-bold dark:text-white"> Our Popular Courses </h1>
                <p className="max-w-xl mx-auto text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div className="flex justify-between">

            <div className="space-y-3 ">
          <div className="flex items-center space-x-2 mt-3">
            <input onChange={(e)=> dispatch(searchParam(e.target.value))} placeholder='Search Course' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
          </div>
        </div>
        <div className="space-y-3 ">
        <select onChange={(e)=> dispatch(sortType(e.target.value))} name="filter" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Filter</option>
          <option value='Programming'>Programming</option>
          <option value='Graphics'>Graphics</option>
          <option value='Video'>Video</option>
          <option value='Marketing'>Marketing</option>
        </select>
        </div>

        <div className="space-y-3 ">
        <select onChange={(e)=> dispatch(priceSort(e.target.value))} name="sortDate" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Sort by Price</option>
          <option value='asc'>Low to high</option>
          <option value='dec'>High to low</option>
        </select>
        </div>

            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 cursor-pointer">
                {
                  content
                }
            </div>
        </div>
    </section>
  );
};

export default AllCourses;