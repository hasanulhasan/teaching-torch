/* eslint-disable @next/next/no-img-element */
import { useGetOrdersQuery } from "@/redux/features/api";

const Cart = ({order}) => {
  const {_id, title, price, category, img} = order;
  return (
    <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                            <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full px-4 mb-3 md:w-1/3">
                                    <div className="w-full h-96 md:h-24 md:w-24">
                                        <img src={img} alt="order items" className="object-cover w-full h-full"/>
                                    </div>
                                </div>
                                <div className="w-2/3 px-4">
                                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">{title}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 ">{category}</p>
                                </div>
                            </div>
                        </div>
                    <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                            <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{price}</p>
                    </div>
              </div>
        </div>
  );
};

export default Cart;