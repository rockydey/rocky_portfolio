import React from "react";
import project1 from "../../assist/project1.png";
import project2 from "../../assist/project2.png";
import project3 from "../../assist/project3.png";
import project4 from "../../assist/project4.png";
import project5 from "../../assist/project5.png";
import project6 from "../../assist/project6.png";

const Details = () => {
  return (
    <div className='lg:mx-20 my-20'>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project1} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>LearnVerse</h2>
          <p className='text-lg mt-3'>
            A MERN Stack Collaborative Study Platform website aims to maintain
            different dashboards based on roles (admin, teacher and student).
          </p>
          <div className='text-normal my-4'>
            <li>
              Dashboard feature available with maintaining personal dashboard
              accessible tabs based on roles.
            </li>
            <li>
              Payment gateway system available using cards and also dynamic
              image uploading feature available.
            </li>
            <li>
              Accepting or rejecting sessions created by teachers and monitoring
              user login and also promoting users role by admin feature
              available.
            </li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind CSS, Flowbite react, Javascript, React, React
            Router, Firebase, NodeJS, ExpressJS, MongoDB, Vercel, Json Web
            Token, React hook form, Stripe, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://learn-verse-auth.web.app/'>
              Live Website
            </a>
            <a
              className='btn btn-primary mx-5'
              href='https://github.com/rockydey/learn-verse-client'>
              Client Side
            </a>
            <a
              className='btn btn-primary'
              href='https://github.com/rockydey/learn-verse-server'>
              Server Side
            </a>
          </div>
        </div>
      </div>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project2} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>TasteTreat</h2>
          <p className='text-lg mt-3'>
            A MERN Stack restaurant management website selling different cuisine
            foods.
          </p>
          <div className='text-normal my-4'>
            <li>
              Users can purchase foods, delete orders and add feedback and also
              users can search food based on food name.
            </li>
            <li>
              Authentication system implemented using firebase so that we can
              track on login or registered users.
            </li>
            <li>
              A digital payment gateway system has been implemented so that
              users can easily pay for ordered foods by cards.
            </li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind CSS, Flowbite react, Javascript, React, React
            Router, Firebase, NodeJS, ExpressJS, MongoDB, Vercel, Json Web
            Token, React hook form, Stripe, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://taste-treat-restaurant-auth.web.app/'>
              Live Website
            </a>
            <a
              className='btn btn-primary mx-5'
              href='https://github.com/rockydey/restaurant-management-client'>
              Client Side
            </a>
            <a
              className='btn btn-primary'
              href='https://github.com/rockydey/restaurant-management-server'>
              Server Side
            </a>
          </div>
        </div>
      </div>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project3} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>RoamingRoutes</h2>
          <p className='text-lg mt-3'>
            A MERN Stack tourism management website providing tour guides of
            Southeast Asia.
          </p>
          <div className='text-normal my-4'>
            <li>
              Authentication system implemented using firebase so that we can
              track on login or registered users.
            </li>
            <li>
              Dark mode is implemented at this website for eye satisfaction and
              enhances the beauty of the website.
            </li>
            <li>
              Users can see all tourist spots in Southeast Asia, and can add
              tourist spots, and also can sort tourist spots by cost. Users can
              see country wise tourist spots by clicking the countries card in
              the home section.
            </li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind CSS, JavaScript, React, React Router, DaisyUI,
            React hook form, Firebase, NodeJS, ExpressJS, MongoDB, Vercel, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://tourism-management-auth.web.app/'>
              Live Website
            </a>
            <a
              className='btn btn-primary mx-5'
              href='https://github.com/rockydey/tourism-management-client'>
              Client Side
            </a>
            <a
              className='btn btn-primary'
              href='https://github.com/rockydey/tourism-management-server'>
              Server Side
            </a>
          </div>
        </div>
      </div>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project4} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>HomeFrontier</h2>
          <p className='text-lg mt-3'>
            This is a Residential Real Estate property selling or giving rent
            website where you can buy or take as rent beautiful House,
            Apartment, and Villa etc.
          </p>
          <div className='text-normal my-4'>
            <li>
              User can login or register this website so that they can see the
              protected document.
            </li>
            <li>
              User can update their name and photo, and user can see beautiful
              property on home page.
            </li>
            <li>
              User can see details of the property by click "View Property"
              button, and user can sort property using navigation at Feature
              Property section on home page.
            </li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind, DaisyUI, React, React Router, AOS package, Firebase, React hook form, swiper, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://home-frontier-auth.web.app/'>
              Live Website
            </a>
            <a
              className='btn btn-primary ml-5'
              href='https://github.com/rockydey/home-frontier'>
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project5} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>The Book Banquet</h2>
          <p className='text-lg mt-3'>
          It is a online book reading website, where we can read all famous books.
          </p>
          <div className='text-normal my-4'>
            <li>Navigate different pages using dynamic Navbar, and click on the book card see the book details.</li>
            <li>In book details clicking Read button it will added to book list, and In Listed Books page all read book and wishlist book are shown here.</li>
            <li>On this route you can sort books which you have already read based on rating, number of pages, and years of publication.</li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind, DaisyUI, React, React Router, recharts, react tabs, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://book-banquet.netlify.app/'>
              Live Website
            </a>
            <a
              className='btn btn-primary ml-5'
              href='https://github.com/rockydey/the-book-banquet'>
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div
        className='lg:flex gap-6 items-center p-5 mb-10'
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>
        <div>
          <img className='rounded-xl' src={project6} alt='' />
        </div>
        <div className='lg:pr-10 lg:px-0 px-3'>
          <h2 className='text-2xl font-semibold'>Book Ticket</h2>
          <p className='text-lg mt-3'>
            A digital ticket booking website.
          </p>
          <div className='text-normal my-4'>
            <li>
              Maximum 4 random sit booking available with dynamic counting.
            </li>
            <li>Coupon code interaction available.</li>
            <li>Beautiful UI and dynamic form available.</li>
          </div>
          <p className='text-normal mb-3'>
            HTML, CSS, Tailwind, Javascript, Tailwind CSS, DaisyUI, Favicon, etc.
          </p>
          <div>
            <a
              className='btn btn-primary'
              href='https://rockydey.github.io/book-ticket/'>
              Live Website
            </a>
            <a
              className='btn btn-primary ml-5'
              href='https://github.com/rockydey/book-ticket'>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
