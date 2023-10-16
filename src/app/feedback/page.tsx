/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Nav from '@/components/Home/Nav';
import { usePostReviewMutation } from '@/redux/features/api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  rating: string
  comment: string
}

const FeedbackForm = () => {
 const dispatch = useAppDispatch();
 const {user, isLoading} = useAppSelector(state => state.user)
 const router = useRouter();
  const [postReview] = usePostReviewMutation();

  const {
    register,
    handleSubmit,
    watch,reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {name: userName, rating, comment, email:userEmail} = data
    console.log(userName, rating, comment, userEmail)
    try {
      await postReview({userName, userEmail, rating, comment,});
      message.success('Your review posted')
      reset()
    } catch (error) {
      console.log(error)
      message.error('There is an error')
    }
  }

  useEffect(() => {
    if(!user.email && !isLoading){
      router.push('/login')
    }
  }, [user.email, isLoading])

  return (
    <div>
      <Nav/>
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl px-4 mx-auto ">
            <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 dark:text-gray-300">Give us your Feedback
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container px-4 mx-auto"></div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Full Name
                        </label>
            <input {...register("name", { required: true })} className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="name" placeholder="Write a full name"/>
            {errors.name && <span className='text-danger-700'>This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Email
                        </label>
            <input {...register("email", { required: true })} className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="email" placeholder="Write your email" defaultValue={user?.email!}/>
            {errors.email && <span className='text-danger-700'>This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">
                            Rating
                        </label>
            <input {...register("rating", { required: true, min: 0, max: 5 })} className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="number" name="rating" placeholder="Give a rating"/>
            {errors.rating && <span className='text-danger-700'>This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" htmlFor="">Your Comment</label>
            <textarea {...register("comment", { required: true })} className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                            name="comment" placeholder="Write something..."></textarea>
            {errors.comment && <span className='text-danger-700'>This field is required</span>}
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

export default FeedbackForm;