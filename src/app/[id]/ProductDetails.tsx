/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Loading from '../loading';
import IProduct from '@/Types';
import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
import { useRouter } from 'next/navigation';
import { CommentOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/redux/hooks';
import { Rate, message } from 'antd';
import { useCreateOrderMutation } from '@/redux/features/orderApi';
import { useEditProductMutation, useGetProductsQuery } from '@/redux/features/productApi';
import Link from 'next/link';

const ProductDetails = ({course}: {  course: IProduct  }) => {
  const {user, isLoading:userIsLoading} = useAppSelector(state=> state.user)
  const [review, setReview] = useState('');
  const [createOrder] = useCreateOrderMutation()
  const [editProduct] = useEditProductMutation()

  const {_id, title, price, seat, img, rating, description, category, reviews, status, instructors, features} = course;
  const router = useRouter();
  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Related Product</p>;
  if (!isLoading && !isError && courses?.length > 0) {
    content = courses
    .filter(course => { return course._id !== _id && course.category === category })
    .map(course => <RelatedProduct key={course._id} course={course} />)}

  const handleOrder = async () => {
    if(user?.email){
      const userEmail = user?.email
      await createOrder({ title, instructors, img, price, category, seat, rating, status, description, features, reviews, isPaid: false, userEmail}).then(()=> {
        message.success('Order Successfully Created')
        router.push(`/orders`)
      })
    }else{
      message.error('You Have to log in first')
    }
  }
  const handleReview = async() => {
    await editProduct({id: _id, data: { reviews:[...reviews!, review] }})
    setReview('')
  }
  
  return (
   <div className='flex sm:flex-row'>
      <div className='lg:w-4/5'>
        <section className="overflow-hidden bg-white py-6 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-2 mx-auto lg:py-2 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-1/4 ">
                            <img src={img} alt="course"
                                className="object-cover w-2/3 lg:h-full "/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:flex">
                    <div className="lg: w-1/2">
                        <div className="mb-4">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">{category}</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-600 md:text-4xl">{title}</h2>
                            <h2 className="max-w-xl mt-1 text-xl font-bold   text-gray-400 md:text-lg">Instructors</h2>
                            <h2 className="max-w-xl mt-1 mb-6 text-xl font-bold dark:text-gray-400 md:text-2xl">
                             {
                              instructors.map((instructor,i)=> <span key={i}>{instructor} <br/> </span>)
                             } 
                            </h2>
                            <div className="flex mb-6">
                            <Rate allowHalf defaultValue={Number(rating)} />
                            <p className="text-xs dark:text-gray-400 ms-">(customers reviews)</p>
                            </div>
                            <p className="max-w-md mb-4 text-gray-700 dark:text-gray-400">
                            {description}
                            </p>
                            <p className="inline-block mb-2 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span>Price: {price}</span>
                            </p>
                            {
                              status? 
                              <>
                            <p className="text-green-600 dark:text-green-300 ">In stock</p>
                              </> : 
                              <>
                            <p className="text-danger-600 dark:text-danger-300 ">Out stock</p>
                              </>
                            }
                        </div>
                        <div className="flex items-center mb-2">
                            <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                                Seat:</h2>
                            <div className="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">{seat}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button
                                onClick={()=> handleOrder()}
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='lg: w-1/2 mt-8'>
      <h1 className='my-2 text-2xl'>Reviews:</h1>
      <div>
        {
          reviews.map(
            (review,i) => (
            <div key={i}>
             <h1 className='text-xl mb-1 text-justify'> <CommentOutlined/> {review}</h1>
            </div>
            )
          )
        }
          {
            user?.email? 
            <>
            <h1 className='my-4 text-2xl'>Leave a Review</h1>
          <textarea onChange={(e)=> setReview(e.target.value)} value={review} className="block w-1/2 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800" name="comment" placeholder="Write your review..."></textarea>
          <button onClick={()=> handleReview()} className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Submit</button>
            </>: 
            <>
            <h1 className='my-4 text-2xl'>Login to make a review <Link href='/login' className='text-blue-600'>Login</Link></h1>
            </>
          }
      </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div> 
    <div className='lg:w-1/5 my-11 px-6'>
          <h1 className='text-center text-lg font-semibold mb-2'>Related products</h1>
          {
            content
          }
    </div>
   </div>
  );
};

export default ProductDetails;