import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import about from '../../assist/about.png';

const About = () => {
    return (
        <div className='my-10 mx-5 md:mx-0' id='about'>
            <h1 className='text-5xl text-center font-bold'>PROFILE</h1>
            <p className='text-2xl text-center mt-1'>I'm a creative React Developer.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-5 justify-center lg:mx-40 md:mx-28 mt-10'>
                <div>
                    <h2 className='font-semibold text-3xl mb-4'>About me</h2>
                    <p>Starting a new career to present myself in the dynamic world with my skills, and knowledge for professional career development. I am confident with my skills and I want to grow more. I have a great passion for programming and that passion has derived me towards web development.</p>
                    <p className='mt-2'>I've also learned react.js, node.js, express.js, MongoDB database, and the latest technologies. I build full-stack responsive websites using this modern technology.</p>
                </div>
                <div className='mx-auto lg:my-0 my-5'>
                    <img className='w-60' src={about} alt="" />
                </div>
                <div>
                    <h2 className='font-semibold text-3xl mb-4'>Details</h2>
                    <div className='mb-2'>
                        <h3 className='font-semibold mb-2'>Name : </h3>
                        <p>Rocky Dey</p>
                    </div>
                    <div className='mb-2'>
                        <h3 className='font-semibold mb-2'>Email : </h3>
                        <p>rockydey077@gmail.com</p>
                    </div>
                    <div className='mb-2'>
                        <h3 className='font-semibold mb-2'>Phone : </h3>
                        <p>+08801642771484</p>
                    </div>
                    <div className='mb-2'>
                        <h3 className='font-semibold mb-2'>Location : </h3>
                        <p>Chattogram, Bangladesh</p>
                    </div>
                    <div className='mt-4 flex gap-5'>
                        <a href="https://www.facebook.com/rocky.hemonto/" target='_blank' className='text-3xl'><FaFacebook></FaFacebook></a>
                        <a href="https://www.linkedin.com/in/deyrocky/" target='_blank' className='text-3xl'><BsLinkedin></BsLinkedin></a>
                        <a href="https://github.com/rockydey/" target='_blank' className='text-3xl'><BsGithub></BsGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;