/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Loading from '../loading';
import IProduct from '@/Types';
import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
import { useRouter } from 'next/navigation';
import { CommentOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/redux/hooks';
import { Rate, message } from 'antd';
import { useCreateOrderMutation } from '@/redux/features/orderApi';
import { useGetProductsQuery } from '@/redux/features/productApi';

const ProductDetails = ({course}: {  course: IProduct  }) => {
  const {user, isLoading:userIsLoading} = useAppSelector(state=> state.user)
  const [createOrder] = useCreateOrderMutation()

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
  
  return (
   <>
   {/* Product details */}
    <div className='lg:w-4/5'>
      <div>
        <div>
        <img alt="course-pic" src={img} className='w-2/3'/>
        <div className='my-4'>
          <div>
          <h1 className='text-2xl'>Title: {title}</h1>
          <p className='text-xl'>Price : {price}</p>
        </div>
        <div>
           <p className='text-xl'>Category : {category}</p>
           <p className='text-xl'>Seat Available: {seat}</p>
           <span className='text-xl'>Rating <Rate allowHalf defaultValue={Number(rating)} /></span>
           <p className='text-xl'>Availability: {status? 'In Stock' : 'Out of Stock'}</p>
        </div>
        <p className='text-xl'>{description}.....</p>
        </div>
        <button onClick={()=> handleOrder()}  className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Add to cart</button>
       </div>

      <div className='my-8'>
      <h1 className='my-4 text-2xl'>Reviews:</h1>
      <div>
        {
          reviews.map(
            (review,i) => (
            <div key={i}>
             
             <h1 className='text-xl'> <CommentOutlined/> {review}</h1>
            </div>
            )
          )
        }
        <h1 className='my-4 text-2xl'>Leave a Review</h1>
          <textarea className="block w-1/2 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800" name="comment" placeholder="Write your review..."></textarea>
          <button className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Submit</button>
      </div>
   </div>
      </div>
    {/* Related Product */}
    </div>
        <div className='lg:w-1/5'>
          <h1 className='text-center'>Related products</h1>
          {
            content
          }
    </div>
   </>
  );
};

export default ProductDetails;