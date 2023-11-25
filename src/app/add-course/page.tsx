/* eslint-disable @next/next/no-img-element */
'use client'
import { Rate } from 'antd';
import React, { useState } from 'react';
import { SubmitHandler, useForm ,Controller} from 'react-hook-form';

type Inputs = {
    title: string;
    instructors: string[];
    img: string;
    price: string;
    category: string;
    seat: string;
    rating: string;
    status: boolean;
    description: string;
    features: string[];
}

const AddCoursePage = () => {
    const [title, setTitle] = useState('');
    const [instructors, setInstructors] = useState<string[]>([]);
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [seat, setSeat] = useState('');
    const [rating, setRating] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState([]);

    const { register, handleSubmit, control, reset, formState: { errors }} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
      }

    const handleForm = (e:any) => {
        e.preventDefault()
        console.log(title, instructors)
    }

  return (
    <div>
       <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl px-4 mx-auto ">
            <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 dark:text-gray-300">Course Information
                </h2>
                <form onSubmit={handleForm} className="">
                    <div className="container px-4 mx-auto"></div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Course Title
                        </label>
                        <input onChange={(e)=> setTitle(e.target.value)} value={title}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="title" placeholder="Write course title"/>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Instructors
                        </label>
                        <input onChange={(e)=> setInstructors(e.target.value)} value={instructors[0]}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="instructors" placeholder="Instructor - 1"/>
                        <input onChange={(e)=> setInstructors(e.target.value)} value={instructors[1]}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="instructors" placeholder="Instructor - 2"/>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Course Image
                        </label>
                        <input 
                        // {...register("img", { required: true })}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="img" placeholder="Course Image URL"/>
                    </div>
                    
                    <div className="grid w-full gap-4 mb-6 lg:grid-cols-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">Category</label>
                        <div className="relative">
                            <select 
                            // {...register("category", { required: true })}
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                name="category">
                                <option value='Programming'>Programming</option>
                                <option value='Graphics'>Graphics</option>
                                <option value='Video'>Video</option>
                                <option value='Marketing'>Marketing</option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">Rating</label>
                        <div className="relative">
                            <select 
                            // {...register("rating", { required: true })}
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                name="rating">
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                        <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Price
                        </label>
                        <input 
                        // {...register("price", { required: true })}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="price" placeholder="Enter Price"/>
                        </div>
                        <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Seat Available
                        </label>
                        <input 
                        // {...register("seat", { required: true })}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="seat" placeholder="Enter seat"/>
                        </div>
                    </div>
                    <div >
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Features
                        </label>
                        <div className="grid w-full gap-4 mb-6 lg:grid-cols-4">
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="feature[0]" placeholder="Feature - 1"/>
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="feature[1]" placeholder="Feature - 2"/>
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="feature[2]" placeholder="Feature - 3"/>
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="feature[3]" placeholder="Feature - 4"/>
                        </div>
                        
                    </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">Description</label>
                        <textarea 
                        // {...register("description", { required: true })}
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                            name="description" placeholder="Write description..."></textarea>
                    </div>

                    <div className="mb-6">
                        {/* <label className="mr-4">
                            <input type="radio" name="status" {...register("status", { required: true })} value='true'/>
                            <span className="ml-2 dark:text-gray-400">In Stock</span>
                        </label>
                        <label>
                            <input type="radio" name="status" {...register("status", { required: true })} value='false'/>
                            <span className="ml-2 dark:text-gray-400">Out of Stock</span>
                        </label> */}
                    </div>
                    <div className="mt-7">
                        <div className="flex justify-start space-x-2">
                            <button type="submit"
                                className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
    </div>
  );
};

export default AddCoursePage;