/* eslint-disable @next/next/no-img-element */
import { useGetProductsQuery } from '@/redux/features/api';
import { Button, Card, Col } from 'antd';
import React from 'react';
import Loading from '../loading';
import IProduct from '@/Types/Global';
import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
import { useRouter } from 'next/navigation';
import { CommentOutlined } from '@ant-design/icons';

const ProductDetails = ({course}) => {
  const {_id, title, price, seat, img, rating, description, category, reviews, status} = course;

  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Related Product</p>;
  if (!isLoading && !isError && courses?.length > 0) {content = courses.
    filter(course => {
      return course._id !== _id && course.category === category
    })
    .map(course => <RelatedProduct key={course._id} course={course} />)}

  const router = useRouter();
  
  const handleOrder = () => {
    router.push(`/orders`)
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
           <p className='text-xl'>Seat Available {seat}</p>
           <p className='text-xl'>Availability: {seat? 'In Stock' : 'Out of Stock'}</p>
        </div>

        
        <p className='text-xl'>{description}</p>
        </div>
        <button onClick={()=> handleOrder()}  className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Add to cart</button>
       </div>
      <div className='my-8'>
      <h1 className='my-4 text-2xl'>Reviews:</h1>
      <div>
        {
          reviews.map(
            review => (
            <div key={review.i}>
             
             <h1 className='text-xl'> <CommentOutlined/> {review}</h1>
            </div>
            )
          )
        }
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