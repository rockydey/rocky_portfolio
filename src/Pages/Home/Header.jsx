import React from 'react';
import banner from '../../assist/banner.jpg';
import { BiCloudDownload } from "react-icons/bi";

const Header = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img style={{boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}} className='w-2/4 rounded-xl' src={banner} alt="" />
                    <div>
                        <h1 class="text-6xl font-bold bg-secondary text-white py-3 pl-4">Hello!</h1>
                        <h2 className='text-5xl font-light mt-6'>I’m Rocky Dey,</h2>
                        <h2 className='text-5xl font-light mt-3'>a junior web Developer.</h2>
                        <a href='https://drive.google.com/file/d/1DOqynzOwaejY6r1DlXmSu1DpK_v8Ty32/view' target='_blank' class="btn btn-primary mt-8 border-secondary font-semibold text-xl border-2 hover:bg-white">Get Resume <span className='ml-2'><BiCloudDownload /></span> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;