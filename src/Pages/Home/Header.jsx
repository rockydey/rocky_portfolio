import React from 'react';
import banner from '../../assist/banner.jpg';
import { BiCloudDownload } from "react-icons/bi";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Junior Web Developer",
    "Programmer",
    "Problem Solver"
];

const Header = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, [])

    return (
        <div>
            <div className="hero min-h-screen z-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <img style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }} className='lg:w-2/4 md:w-3/4 rounded-xl' src={banner} alt="" />
                    <div>
                        <h1 className="text-6xl font-bold bg-secondary text-white py-3 pl-4">Hello!</h1>
                        <h2 className='text-5xl font-light mt-6'>I’m Rocky Dey,</h2>
                        <h2 className='text-5xl font-light mt-3 flex gap-2'>a <span className=' text-primary'><TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.wobbly}
                        /></span></h2>
                        <a href='https://drive.google.com/file/d/1DOqynzOwaejY6r1DlXmSu1DpK_v8Ty32/view' target='_blank' className="btn btn-primary mt-8 border-secondary font-semibold text-xl border-2 hover:bg-white">Get Resume <span className='ml-2'><BiCloudDownload /></span> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;