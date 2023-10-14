/* eslint-disable @next/next/no-img-element */
import { useGetProductsQuery } from '@/redux/features/api';
import { Button, Card, Col } from 'antd';
import React from 'react';
import Loading from '../loading';
import IProduct from '@/Types/Global';
import RelatedProduct from '@/components/RelatedProduct/RelatedProduct';
import { useRouter } from 'next/navigation';

const ProductDetails = ({course}) => {
  const {_id, title, price, seat, img, rating, description, category, reviews, status} = course;

  const {data, isLoading, isError} = useGetProductsQuery(undefined);
  const courses:IProduct[] = data?.data

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && !isError && courses?.length === 0) content = <p className='text-lg text-destructive'>There is no Book</p>;
  if (!isLoading && !isError && courses?.length > 0) {content = courses.filter(course => course._id !== _id).map(course => <RelatedProduct key={course._id} course={course} />)}

  const router = useRouter();
  
  const handleOrder = () => {
    router.push(`/orders`)
  }
  
  return (
   <>
         <Col sm={12} lg={18}>
      <div>
    <Card
    style={{ width: 600 }}
    cover={ <img alt="example" src={img} /> }
  >
    <h1>Title: {title}</h1>
    <p>Price : {price}</p>
    <p>{description}</p>

    <p>Category : {category}</p>
    <p>Seat Available {seat}</p>
    <p>Availability: {seat? 'In Stock' : 'Out of Stock'}</p>
    <Button
     onClick={()=> handleOrder()} 
     style={{marginTop: '10px'}}>Add to cart</Button>
  </Card>
  <div style={{margin: '20px 0px'}}>
  <h1 style={{margin: '20px 0px'}}>Reviews:</h1>
  <div>
    {
      reviews.map(review => 
      <h1 key={review.i}>{review}</h1>
      )
    }
  </div>
</div>
   </div>
      </Col>

        <Col sm={12} lg={6}>
          Related products
          {
            content
          }
          {/* <div className='border rounded-md'>
            <div style={{display: 'flex', alignContent: 'space-between'}}>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="img" className='h-20'/>
              <div className='ml-4 flex flex-col mt-4'>
                <h1>Title: This is title</h1>
                <p>Price: price</p>
              </div>
            </div>
          </div> */}
        </Col>
   </>
  );
};

export default ProductDetails;