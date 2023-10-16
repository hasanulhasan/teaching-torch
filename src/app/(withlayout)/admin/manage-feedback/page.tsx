'use client'
import Loading from "@/app/loading";
import { useDeleteReviewMutation, useGetReviewQuery } from "@/redux/features/api";
import { message } from "antd";
import IFeedback from '@/Types';

const FeedbackPage = () => {
  const [deleteReview] = useDeleteReviewMutation();
  const {data, isLoading, isError} = useGetReviewQuery(null);
  const feedbacks:IFeedback[] = data?.data

  const handleFeedback = async (id: string) => {
      try {
        await deleteReview(id).then(()=> {
          message.success('Review Deleted')
        })
      } catch (error) {
        console.log(error)
        message.error('There is an error')
      }
  }

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && feedbacks?.length === 0) content = <p className='text-lg text-destructive'>There is no Feedback</p>;
  if (!isLoading && !isError && feedbacks?.length > 0) { content = feedbacks
    .map(feedback => <tr key={feedback._id} className="text-xs bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
    <td className="px-6 py-5 font-medium">{feedback.userName}</td>
    <td className="px-6 py-5 font-medium">{feedback.userEmail}</td>
    <td className="px-6 py-5 font-medium">{feedback.comment}</td>
    <td className="px-6 py-5 font-medium ">{feedback.rating}</td>
    <td className="px-6 py-5 ">
        <button onClick={()=> handleFeedback(feedback._id!)}
            className="px-4 py-2 font-medium text-blue-500 border border-blue-500 rounded-md dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:text-danger-100 hover:bg-danger-500">Delete
        </button>
    </td>
</tr>)}

  return (
    <div>
      <section className="items-center lg:flex bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 bg-white rounded shadow dark:bg-gray-900">
                <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold dark:text-gray-400">User Feedbacks</h2>
                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
                                <th className="px-6 pb-3 font-medium">Name</th>
                                <th className="px-6 pb-3 font-medium">Email</th>
                                <th className="px-6 pb-3 font-medium">Comments</th>
                                <th className="px-6 pb-3 font-medium ">Rating</th>
                                <th className="px-6 pb-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              content
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default FeedbackPage;