'use client'
import Loading from '@/app/loading';
import { message } from 'antd';
import { useDeleteProductMutation, useGetProductsQuery } from '@/redux/features/productApi';
import IProduct from '@/Types';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { priceSort, searchParam, sortType } from '@/redux/features/filter/adminFilterSlice';

const ManageCourses = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading, isError} = useGetProductsQuery(null);
  const courses:IProduct[] = data?.data
  const [deleteProduct] = useDeleteProductMutation()
  const {search, sort, price} = useAppSelector(state => state.adminFilter)

  const handleDeleteCourse = async (id: string) => {
      try {
        await deleteProduct(id).then(()=> {
          message.success('Course Deleted')
        })
      } catch (error) {
        console.log(error)
        message.error('There is an error')
      }
  }

  const filterByCategory = (course: IProduct) => {
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
  }
  const filterBySearch = (course: IProduct) => {
    if (search) {
      return course.title.toLowerCase().includes(search.toLowerCase())
    }
    else {
      return course
    }
  }
  const SortByPrice = (courses:IProduct[]) => {
    if (price === 'asc') { return courses.sort((a,b)=> { return Number(a.price) - Number(b.price) }) }
    else if (price === 'dec') {  return courses.sort((a,b)=> { return Number(b.price) - Number(a.price) }) }
    else { return courses }
  }


  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Course</p>;
  if (!isLoading && !isError && courses?.length > 0) { 
   
    const  coursesToShow = SortByPrice(courses.filter(filterByCategory).filter(filterBySearch))

    content =  coursesToShow.length > 0 ? (
      coursesToShow.map(course => 
    <tr key={course._id} className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
      <td className="px-6 py-5 font-extrabold">{course.title}</td>
      <td className="px-6 py-5 font-medium">{course.seat}</td>
      <td className="px-6 py-5 font-medium ">{course.price}</td>
      <td className="px-6 py-5 font-medium ">{course.category}</td>
      <td className="px-6 py-5 font-medium ">{course.status} 
            { course?.status === true ? <span
              className="inline-block px-2 py-1 text-center text-green-600 bg-green-100 rounded-full dark:text-green-700 dark:bg-green-200">In Stock</span> : <span
              className="inline-block px-2 py-1 text-center text-danger-600 bg-danger-100 rounded-full dark:text-gray-700 dark:bg-danger-200">Out of Stock</span>
            }
      </td>
      <td className="px-6 py-5 ">
          <button onClick={()=> handleDeleteCourse(course._id!)}
              className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-danger-100 hover:bg-danger-600">Delete
          </button>
      </td>
    </tr>)
    ) : (
      <p className="my-4 text-xl font-bold dark:text-white text-center"> No Course was found</p>
    )
}

 
  return (
    <div>
      <section className="items-center lg:flex bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
                <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold dark:text-gray-400">All Courses</h2>
                </div>
                <div className='flex mx-4 mt-2 justify-between'>
                <input onChange={(e)=> dispatch(searchParam(e.target.value))} placeholder='Search Course' className="w-1/3 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>

                <div className="space-y-3">
        <select onChange={(e)=> dispatch(sortType(e.target.value))} name="filter" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <option value=''>Filter</option>
          <option value='Programming'>Programming</option>
          <option value='Graphics'>Graphics</option>
          <option value='Video'>Video</option>
          <option value='Marketing'>Marketing</option>
        </select>
        </div>

                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                                <th className="px-6 pb-3 font-medium">Course Name</th>
                                <th className="px-6 pb-3 font-medium">Seat</th>
                                <th className="px-6 pb-3 font-medium ">Price {
                                 price == 'dec'? <>
                                 <SortAscendingOutlined 
                                onClick={()=> dispatch(priceSort('asc'))}
                                style={{
                                  fontSize: '18px',
                                  marginLeft: '2px',
                                  cursor: 'pointer'
                                }} />
                                 </> 
                                : 
                                <>
                                 <SortDescendingOutlined 
                                onClick={()=> dispatch(priceSort('dec'))}
                                style={{
                                  fontSize: '18px',
                                  marginLeft: '2px',
                                  cursor: 'pointer'
                                }} />
                                 </>
                                
                                }</th>
                                <th className="px-6 pb-3 font-medium flex items-center">Course Category</th>
                                <th className="px-6 pb-3 font-medium">Available Status</th>
                                <th className="px-6 pb-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              content
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default ManageCourses;