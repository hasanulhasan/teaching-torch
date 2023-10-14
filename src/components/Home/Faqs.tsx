
const Faqs = () => {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800 font-poppins">
    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-400">
            Our Features
        </h2>
        <div className="w-20 mx-auto mb-8 border-b border-red-700 dark:border-gray-400"></div>
        <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                <div
                    className="h-full p-6 text-left transition duration-200 rounded-md shadow dark:bg-gray-900 bg-gray-50 ">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-lg dark:bg-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                            <path
                                d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">
                        Lorem ipsum dor set amet
                    </h2>
                    <p className="font-medium text-gray-600 dark:text-gray-500">
                        Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus
                    </p>
                </div>
            </div>
            <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                <div
                    className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50 dark:bg-gray-900">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-red-600 bg-red-100 rounded-lg dark:bg-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-5 h-5 bi bi-bar-chart" viewBox="0 0 16 16">
                            <path
                                d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">Lorem ipsum dor
                        set amet</h2>
                    <p className="font-medium text-gray-600 dark:text-gray-500">
                        Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus</p>
                </div>
            </div>
            <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                <div
                    className="h-full p-6 text-left transition duration-200 rounded-md shadow bg-gray-50 dark:bg-gray-900">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-green-600 bg-green-100 rounded-lg dark:bg-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-5 h-5 bi bi-map" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">Lorem ipsum dor
                        set amet</h2>
                    <p className="font-medium text-gray-600 dark:text-gray-500">
                        Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Faqs;