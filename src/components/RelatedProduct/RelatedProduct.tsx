/* eslint-disable @next/next/no-img-element */
import React from 'react';

const RelatedProduct = ({course}) => {
  console.log(course)
  const {_id, title, price} = course;
  return (
    <div className='border rounded-md'>
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