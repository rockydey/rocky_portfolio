import React from 'react';
import project1 from '../../assist/project1.png';
import project2 from '../../assist/project2.png';
import project3 from '../../assist/project3.png';
import project4 from '../../assist/project4.png';
import project5 from '../../assist/project5.png';
import project6 from '../../assist/project6.png';

const Details = () => {
    return (
        <div className='mx-20 my-20'>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project1} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>Revo Part's Manufacture</h2>
                    <p className='text-lg mt-3'>A manufacturing website where users can buy car part's.</p>
                    <div className='text-normal my-4'>
                        <li>Users can purchase products, cancel products and add feedback. This response will be featured on the home page.</li>
                        <li>Admins can view all users, add new products, update product stock, and even set up admin roles.</li>
                        <li>A digital payment system has been added so that users can easily make payments.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, DaisyUI, Javascript, React, React Router, Firebase, React Query, React hook form, NodeJS, ExpressJS, MongoDB, heroku, Json web token
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://revo-parts-manufacture.web.app/">Live Website</a>
                        <a className='btn btn-primary mx-5' href="https://github.com/rockydey/revo-parts-manufacture-client">Client Side</a>
                        <a className='btn btn-primary' href="https://github.com/rockydey/revo-parts-manufacture-server">Server Side</a>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project2} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>Gadget House</h2>
                    <p className='text-lg mt-3'>A management warehouse website where electronic gadgets are stocked.</p>
                    <div className='text-normal my-4'>
                        <li>Authentication system has been added using email and password or Google sign in.</li>
                        <li>Users can update stock and delete products on this website.</li>
                        <li>Security patches have been added using JSON web tokens for validation.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, Javascript, React, React Router, Firebase, NodeJS, ExpressJS, MongoDB, heroku, Json web token
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://laptop-warehouse-management.web.app/">Live Website</a>
                        <a className='btn btn-primary mx-5' href="https://github.com/rockydey/gadget-house-client">Client Side</a>
                        <a className='btn btn-primary' href="https://github.com/rockydey/gadget-house-server">Server Side</a>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project3} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>Davis Photography</h2>
                    <p className='text-lg mt-3'>A photography portfolio website.</p>
                    <div className='text-normal my-4'>
                        <li>Authentication system has been added using email and password or Google sign in.</li>
                        <li>Users can see beautiful pictures in the portfolio section.</li>
                        <li>Checkout page added for payment.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, Javascript, React, React Router, Firebase, React toasts
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://photography-portfolio-website.web.app/">Live Website</a>
                        <a className='btn btn-primary ml-5' href="https://github.com/rockydey/photography-portfolio">Source Code</a>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project4} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>Enfield Bullet Exploration</h2>
                    <p className='text-lg mt-3'>A presentation website where presenting Enfield Bullet bike.</p>
                    <div className='text-normal my-4'>
                        <li>Beautiful header section added.</li>
                        <li>Beautiful graph charts added.</li>
                        <li>See what out customers say.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, Javascript, React, React Router
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://enfield-bullet-exploration-rocky.netlify.app/">Live Website</a>
                        <a className='btn btn-primary ml-5' href="https://github.com/rockydey/enfield-bullet-exploration">Source Code</a>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project5} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>Car Valley</h2>
                    <p className='text-lg mt-3'>Car's website where you can present your car's.</p>
                    <div className='text-normal my-4'>
                        <li>Users can choose random car.</li>
                        <li>Users can pick one car by lottery system.</li>
                        <li>User can clear dashboard and start choosing car's again.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, Javascript, React, React Router
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://car-valley-rocky.netlify.app/">Live Website</a>
                        <a className='btn btn-primary ml-2' href="https://github.com/rockydey/car-valley">Source Code</a>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center rounded-2xl mb-10' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                <div>
                    <img className='rounded-2xl' src={project6} alt="" />
                </div>
                <div className='pr-10'>
                    <h2 className='text-2xl font-semibold'>To Do App</h2>
                    <p className='text-lg mt-3'>A listing task website where you can add your daily activities.</p>
                    <div className='text-normal my-4'>
                        <li>Authentication system has been added using email and password or Google sign in.</li>
                        <li>Users can add daily tasks.</li>
                        <li>User can delete task after complete.</li>
                    </div>
                    <p className='text-normal mb-3'>
                        HTML, CSS, Tailwind, Javascript, React, React Router, Firebase, NodeJS, ExpressJS, MongoDB, heroku, Json web token
                    </p>
                    <div>
                        <a className='btn btn-primary' href="https://to-do-app-b7246.web.app/">Live Website</a>
                        <a className='btn btn-primary mx-5' href="https://github.com/rockydey/to-do-app-client">Client Side</a>
                        <a className='btn btn-primary' href="https://github.com/rockydey/to-do-app-server">Server Side</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;