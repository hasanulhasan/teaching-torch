/* eslint-disable @next/next/no-img-element */
import IProduct from '@/Types';
import { useRouter } from 'next/navigation';
import React from 'react';

const RelatedProduct = ({course}: {course: IProduct}) => {
  const {_id, title, price, img} = course;

  const router = useRouter();
  const handleRoute = () => {
    router.push(`/${_id}`)
  }
  return (
    <div onClick={()=> handleRoute()} className='border rounded-md cursor-pointer mt-2'>
        <div style={{display: 'flex', alignContent: 'space-between'}}>
        <img src={img} alt="img" className='h-20 w-28'/>
        <div className='ml-4 flex flex-col mt-4'>
                <h1>{title}</h1>
                <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;