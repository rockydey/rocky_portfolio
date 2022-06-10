import React from 'react';
import project1 from '../../assist/project1.png';
import project2 from '../../assist/project2.png';
import project3 from '../../assist/project3.png';
import project4 from '../../assist/project4.png';
import project5 from '../../assist/project5.png';
import project6 from '../../assist/project6.png';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate('/details')
    }
    return (
        <div className='bg-secondary md:p-10 p-5'>
            <div className='my-10 mx-5 lg:mx-0' id='myproject'>
                <h1 className='text-5xl text-center text-white font-bold'>My Projects</h1>
                <p className='text-2xl text-center text-white mt-1'>Explore my all latest project with source code.</p>
                <div className='mt-8 lg:mx-20'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={project1} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={project2} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={project3} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={project4} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img src={project5} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-full">
                            <img src={project6} alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <button onClick={handleDetails} className='btn btn-primary font-semibold text-lg'>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;