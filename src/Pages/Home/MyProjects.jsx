import React from 'react';
import project1 from '../../assist/project1.png';
import project2 from '../../assist/project2.png';
import project3 from '../../assist/project3.png';
import project4 from '../../assist/project4.png';
import project5 from '../../assist/project5.png';
import project6 from '../../assist/project6.png';

const MyProjects = () => {
    return (
        <div className='my-10 mx-5 lg:mx-0'>
            <h1 className='text-5xl text-center font-bold'>My Projects</h1>
            <p className='text-2xl text-center mt-1'>Explore my all latest project with source code.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8 lg:mx-20'>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">Revo Part's Manufacture</h2>
                        <p className='text-slate-100'>A manufacturing website where users can buy car part's.</p>
                        <div class="card-actions justify-end">
                            <a href='https://revo-parts-manufacture.web.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/revo-parts-manufacture-client' target='_blank' class="btn btn-primary font-semibold">Client Side</a>
                            <a href='https://github.com/rockydey/revo-parts-manufacture-server' target='_blank' class="btn btn-primary font-semibold">Server Side</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">Gadget House</h2>
                        <p className='text-slate-100'>A management warehouse website where electronic gadgets are stocked.</p>
                        <div class="card-actions justify-end">
                            <a href='https://laptop-warehouse-management.web.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/gadget-house-client' target='_blank' class="btn btn-primary font-semibold">Client Side</a>
                            <a href='https://github.com/rockydey/gadget-house-server' target='_blank' class="btn btn-primary font-semibold">Server Side</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">DAVIS PHOTOGRAPHY</h2>
                        <p className='text-slate-100'>A Photography portfolio website.</p>
                        <div class="card-actions justify-end">
                            <a href='https://photography-portfolio-website.web.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/photography-portfolio' target='_blank' class="btn btn-primary font-semibold">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">Enfield Bullet Exploration</h2>
                        <p className='text-slate-100'>A presentation website where presenting Enfield Bullet bike.</p>
                        <div class="card-actions justify-end">
                            <a href='https://enfield-bullet-exploration-rocky.netlify.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/enfield-bullet-exploration' target='_blank' class="btn btn-primary font-semibold">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">Car Valley</h2>
                        <p className='text-slate-100'>Car's website where you can present your car's.</p>
                        <div class="card-actions justify-end">
                            <a href='https://car-valley-rocky.netlify.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/car-valley' target='_blank' class="btn btn-primary font-semibold">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl image-full">
                    <figure><img src={project6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-slate-100">To Do App</h2>
                        <p className='text-slate-100'>A listing task website where you can add your daily activities.</p>
                        <div class="card-actions justify-end">
                            <a href='https://to-do-app-b7246.web.app/' target='_blank' class="btn btn-primary font-semibold">Live Website</a>
                            <a href='https://github.com/rockydey/to-do-app-client' target='_blank' class="btn btn-primary font-semibold">Client Side</a>
                            <a href='https://github.com/rockydey/to-do-app-server' target='_blank' class="btn btn-primary font-semibold">Server Side</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;