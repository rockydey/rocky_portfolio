import React, { useRef } from 'react';
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const handleContact = event => {
        event.preventDefault();

        emailjs.sendForm('service_day1rww', 'template_1xfpyh3', form.current, 'dK_bkUvXtikh4Wkyl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset();
    };

    return (
        <div className='my-16 lg:mx-20 mx-5' id='contact'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-8'>
                <div className='bg-secondary py-20 flex flex-col justify-center'>
                    <div className='text-center'>
                        <p className='text-7xl text-primary flex justify-center'><BsPhone></BsPhone></p>
                        <p className='text-white mt-2'>+08801642771484</p>
                    </div>
                    <div className='text-center my-10'>
                        <p className='text-7xl text-primary flex justify-center'><HiOutlineMail></HiOutlineMail></p>
                        <p className='text-white'>rockydey077@gmail.com</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-7xl text-primary flex justify-center'><IoLocationOutline></IoLocationOutline></p>
                        <p className='text-white'>Chattogram, Bangladesh</p>
                    </div>
                </div>
                <div className='my-8 mx-auto lg:mx-0'>
                    <h1 className='text-5xl font-bold'>Contact Me</h1>
                    <p className='text-2xl mt-1 mb-5'>Feel free to contact with me.</p>
                    <form ref={form} onSubmit={handleContact} action="">
                        <input name='Name' className='border-b-2 rounded-xl py-6 pl-5 md:pr-56 pr-10 mb-3' type="text" placeholder='Enter your name' /><br />
                        <input className='border-b-2 rounded-xl py-6 pl-5 md:pr-56 pr-10 mb-3' type="email" placeholder='Enter email address' /><br />
                        <input className='border-b-2 rounded-xl py-6 pl-5 md:pr-56 pr-10 mb-3' type="text" placeholder='Enter subject' /><br />
                        <textarea className='border-b-2 rounded-xl py-6 pl-5 md:pr-56 pr-10 mb-3' name="message" id="" cols="22" rows="2" placeholder='Enter your message'></textarea><br />
                        <button type="submit" className='btn btn-primary text-white font-semibold px-8 text-xl tracking-wider uppercase'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;