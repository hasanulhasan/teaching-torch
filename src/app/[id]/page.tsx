/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';

import { Button, Card, Col, Row } from 'antd';
import { useParams } from 'next/navigation';
import { useGetProductQuery } from '@/redux/features/api';
import Loading from '../loading';
import ProductDetails from './ProductDetails';

const DetailPage = () => {
  const id = useParams();
  const {data, isLoading, isError} = useGetProductQuery(id?.id)
  const course = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && course) {content = <ProductDetails key={course._id} course={course}/>}

  return (
    <div>
      <div className='mx-16'>
      <h1 className='text-center font-extrabold text-4xl my-4'>{course?.title}</h1>
        <div className='flex flex-col lg:flex-row'>
        { content }
        </div>
      </div>
  </div>
  );
};

export default DetailPage;