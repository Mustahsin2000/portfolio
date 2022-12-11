import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
// import imag from '../images/rafi1.jpg'
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div className="hero min-h-screen rounded" style={{ backgroundImage: `url("https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"><span>Mustahsin</span> Al Rafi</h1>
                    <p className="mb-5 text-3xl">This is your <span className='text-gray-900 font-bold'>MERN Stack Developer</span> to serve you the best</p>
                    <Link to='Projects' smooth duration={500} className="btn btn-primary  text-white w-fit px-6 py-3 my-2 flex mx-auto  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio
                    <span className='ml-3 hover:rotate-180 duration-300'><FaArrowCircleRight/></span>
                    </Link>
                </div>
            </div>
           
        </div>
        
    );
};

export default Home;