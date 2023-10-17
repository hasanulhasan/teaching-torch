/* eslint-disable @next/next/no-img-element */
'use client'
import { useParams } from 'next/navigation';
import Loading from '../loading';
import ProductDetails from './ProductDetails';
import { useGetProductQuery } from '@/redux/features/productApi';

const ProductDetailsPage = () => {
  const id:any = useParams();
  const {data, isLoading, isError} = useGetProductQuery(id?.id)
  const course = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && course) {content = <ProductDetails key={course._id} course={course}/>}

  return (
    <div>
        { content }
  </div>
  );
};

export default ProductDetailsPage;