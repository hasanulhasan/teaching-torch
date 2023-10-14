/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import React from 'react';

const RelatedProduct = ({course}) => {
  const {_id, title, price} = course;

  const router = useRouter();
  const handleRoute = () => {
    router.push(`/${_id}`)
  }
  return (
    <div onClick={()=> handleRoute()} className='border rounded-md cursor-pointer'>
            <div style={{display: 'flex', alignContent: 'space-between'}}>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="img" className='h-20'/>
              <div className='ml-4 flex flex-col mt-4'>
                <h1>{title}</h1>
                <p>Price: {price}</p>
              </div>
           </div>
    </div>
  );
};

export default RelatedProduct;