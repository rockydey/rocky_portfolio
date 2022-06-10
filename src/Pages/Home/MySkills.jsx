import React from 'react';

const MySkills = () => {
    return (
        <div className='my-16 mx-5 md:mx-20'>
            <h1 className='text-5xl text-center font-bold'>My Skills</h1>
            <p className='text-2xl text-center mt-1'>Growing my skills with new technology to present myself in the dynamic world.</p>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-10 lg:mx-40 mt-8'>
                <div>
                    <h4 className='font-semibold'>HTML5</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "95%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>CSS3</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>JavaScript</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>Bootstrap</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "85%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>Tailwind</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "83%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>React</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "75%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>Firebase</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "73%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>NodeJS</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>ExpressJS</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "68%" }}></div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>MongoDB</h4>
                    <div class="w-full bg-gray-200 h-2 rounded mb-6">
                        <div class="bg-primary rounded h-2" style={{ width: "65%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;