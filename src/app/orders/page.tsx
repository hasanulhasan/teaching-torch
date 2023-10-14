/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useGetOrdersQuery } from '@/redux/features/api';
import React from 'react';
import Nav from '@/components/Home/Nav'
import { Footer } from 'antd/es/layout/layout';
import Cart from '@/components/Cart/Cart';
import Loading from '../loading';

const page = () => {
  const {data, isLoading, isError} = useGetOrdersQuery(null);
  const orders = data?.data
  
  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && orders?.length === 0) content = <p className='text-lg text-destructive'>There is no Order</p>;
  if (!isLoading && !isError && orders?.length > 0) { content = orders.map(order => <Cart key={order._id} order={order} />)}

  return (
    <div>
      <Nav/>
      <section className="py-24 bg-gray-100 font-poppins dark:bg-gray-700">
    <div className="px-4 py-4 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
            <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
            <div className="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
                <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                    <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400">Course Name</h2>
                    </div>
                    <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400"> Price</h2>
                    </div>
                </div>
                {content}
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full px-4 mb-4 lg:w-1/2 ">
                    <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                        <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                        <div
                            className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                            <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
                            <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">$99.00</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 mb-4 ">
                            <span className="text-gray-700 dark:text-gray-400 ">Shipping</span>
                            <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 mb-4 ">
                            <span className="text-gray-700 dark:text-gray-400">Order Total</span>
                            <span className="text-xl font-bold text-gray-700 dark:text-gray-400">$99.00</span>
                        </div>
                        <h2 className="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                        <div className="flex items-center gap-2 mb-4 ">
                            <a href="#">
                                <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt=""
                                    className="object-cover h-16 w-26"/>
                            </a>
                            <a href="#">
                                <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt=""
                                    className="object-cover h-16 w-26"/>
                            </a>
                            <a href="#">
                                <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt=""
                                    className="object-cover h-16 w-26"/>
                            </a>
                        </div>
                        <div className="flex items-center justify-between ">
                            <button
                                className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
};

export default page;