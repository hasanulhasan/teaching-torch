/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import IProduct from '@/Types/Global';
import ClassRoom from '../../assets/lecture.png'
import PeopleIcon from '../../assets/user.png'
import { Rate } from 'antd';

const Course = ({course}: IProduct) => {
  const {_id, title, price, img, rating, seat, category, description, instructors} = course;

  const router = useRouter();
  const handleRoute = () => {
    router.push(`/${_id}`)
  }

  return (
   <div onClick={()=> handleRoute()}
    style={{
      marginTop: '15px'
    }}>
        <div className="relative w-full h-56">
            <img src={img} alt=""
                className="object-cover w-full h-full "/>
            <span className="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                {category}</span>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700">
            <div className="flex items-center justify-between mb-1">
                <div>
                    <a href="">
                        <h2 className="text-xl font-semibold dark:text-gray-300">{title}</h2>
                    </a>
                </div>
                <div className="flex">
                    <a href="" className="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor"
                            className="bi bi-share" viewBox="0 0 16 16">
                            <path
                                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                    </a>
                    <a className="text-lg font-medium text-red-600 dark:text-gray-300" href="#"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg></a>
                </div>
            </div>
            <div className="flex items-center mb-4">
            <a href="" className="mr-1 text-blue-600 dark:text-gray-300">
                <Image src={PeopleIcon} height={14} width={14} alt='people-icon'></Image>
                        </a>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{instructors[0]}</span>
                    </div>
                    <h2 className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-400">
                        {description} ...
                    </h2>
                    <div className='my-1'>
                    <span>Rating <Rate allowHalf defaultValue={Number(rating)} /></span>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                        <div>
                            <span className='text-sm p-1 px-2 font-bold bg-blue-100 rounded text-gray-700 dark:text-gray-400'>Seat: {seat}</span>
                        </div>
                        </div>
                        <div>
                            <span className='text-sm p-1 px-2 font-bold bg-blue-100 rounded text-gray-700 dark:text-gray-400'>Price: {price}</span>
                        </div>
                        <button onClick={()=> handleRoute()}
                            className="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100">
                            View Details
                        </button>
                    </div>
          </div>
    </div>
  );
};

export default Course;