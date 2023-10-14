/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import Nav from '@/components/Home/Nav'
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
      <Nav/>
      <div style={{ margin: '20px 20%'}}>
      <div style={{ margin: '20px auto',}}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bolder'
      }}>{course?.title}</h1>
      </div>
      <Row gutter={24}>
           { content }
      </Row>
    </div>
  </div>
  );
};

export default DetailPage;