/* eslint-disable @next/next/no-img-element */
const reviewers = [
    {
        name: 'Allyson Smith',
        img: 'https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg',
        role: 'Python Learner',
        review: "Keep on jumping to get the most of the jump rope exercise. It will help you to increase your bone density as well"
    },
    {
        name: 'Watson Gems',
        img: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
        role: 'Java Learner',
        review: "Keep on jumping to get the most of the jump rope exercise. It will help you to increase your bone density as well"
    },
    {
        name: 'Allyson Smith',
        img: 'https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg',
        role: 'JavaScript Learner',
        review: "Keep on jumping to get the most of the jump rope exercise. It will help you to increase your bone density as well"
    }
]

const Reviews = () => {
  return (
    <div>
         <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-7xl">
            <div className="mb-20 text-center">
                <h1 className="mb-4 text-3xl font-bold dark:text-white"> What Our Students Saying </h1>
                <p className="max-w-xl mx-auto text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div className="flex ">
                <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        reviewers.map((review,i)=> <div key={i} className="relative mb-10 border-b-4 border-blue-500">
                        <div className="z-20 pt-8 pb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="absolute top-0 left-0 w-20 h-20 opacity-10" viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                            </svg>
                            <div className="text-center">
                                <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                                    <div
                                        className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4">
                                    </div>
                                    <img className="object-cover w-full h-full"
                                        src={review.img}
                                        alt=""/>
                                    <div
                                        className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4 text-base leading-7 text-gray-400">
                                {review.review}
                            </p>
                            <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                                {review.name}
                            </h2>
                            <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                {review.role}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10" viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                            </svg>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Reviews;