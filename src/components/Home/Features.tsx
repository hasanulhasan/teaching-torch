import Image from 'next/image';
import Industry from '../../assets/manufacturing.png'
import MentorShip from '../../assets/mentorship.png'
import Mentoring from '../../assets/mentoring.png'
import Helping from '../../assets/help.png'
import Test from '../../assets/exam.png'
import Technology from '../../assets/technology.png'
const features = [
    {
        id: 1,
        title: 'Learning with Best Qualified Mentors',
        icon: MentorShip,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
    {
        id: 2,
        title: 'Live class with pre recorded classes',
        icon: Mentoring,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
    {
        id: 3,
        title: 'Support Session for backward students',
        icon: Helping,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
    {
        id: 4,
        title: 'Latest resource and Technology',
        icon: Technology,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
    {
        id: 5,
        title: 'Frequent Assignment and Continuous Assesment',
        icon: Test,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
    {
        id: 6,
        title: 'Collaborate with finest Company',
        icon: Industry,
        description: 'Lorem ipsum dor amet is a dummy text.Lorem ipsum dor ametisopinus ipaino cumberisus'
    },
]
const Features = () => {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800 font-poppins">
    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-400">
            Our Features
        </h2>
        <div className="w-20 mx-auto mb-8 border-b border-red-700 dark:border-gray-400"></div>
        <div className="flex flex-wrap justify-center -mx-4">
            {
                features.map(feature => (
                <div key={feature.id} className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3"> 
                    <div
                      className="h-full p-6 text-left transition duration-200 rounded-md shadow dark:bg-gray-900 bg-gray-50 ">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-lg dark:bg-gray-700 dark:text-gray-400">
                        <Image src={feature.icon} alt='feature-photo'></Image>
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl dark:text-gray-400">
                        {feature.title}
                    </h2>
                    <p className="font-medium text-gray-600 dark:text-gray-500">
                        {feature.description}
                    </p>
                </div>
            </div>
        ))
            }
        </div>
    </div>
</section>
  );
};

export default Features;