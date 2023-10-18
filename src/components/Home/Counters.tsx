'use client'

import { BookOutlined,SafetyCertificateOutlined, MacCommandOutlined, ReadOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counters = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='mx-24'>
            <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-400">
            Our Reachment
        </h2>
        <div className="w-20 mx-auto mb-8 border-b border-red-700 dark:border-gray-400"></div>
        {/* @ts-ignore */}
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className='flex flex-col lg:flex-row items-center justify-around my-8 text-center'>
                    <div className='border-2 border-gray-200 py-5 px-16 rounded-lg sm: mt-2'>
                        <div className='flex items-center gap-3'>
                            <BookOutlined style={{ fontSize: '36px'}}/>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={34} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-1 mt-1'>FOREIGN FOLLOWERS</p>
                    </div>
                    {/* 2 */}
                    <div className='border-2 border-gray-200 py-5 px-16 rounded-lg sm: mt-2'>
                        <div className='flex items-center gap-3'>
                            <ReadOutlined style={{ fontSize: '36px'}}/>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={12} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-1 mt-1'>CLASSES COMPLETE</p>
                    </div>
                    {/* 3 */}
                    <div className='border-2 border-gray-200 py-5 px-16 rounded-lg sm: mt-2'>
                        <div className='flex items-center gap-3'>
                            <MacCommandOutlined style={{ fontSize: '36px'}}/>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={214} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-1'>STUDENTS ENROLLED</p>
                    </div>
                    {/* 4 */}
                    <div className='border-2 border-gray-200 py-5 px-16 rounded-lg sm: mt-2'>
                        <div className='flex items-center gap-3'>
                            <SafetyCertificateOutlined style={{ fontSize: '36px'}}/>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={56} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-1 mt-1'>CERTIFIED TEACHERS</p>
                    </div>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Counters;