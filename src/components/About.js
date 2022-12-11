import React from 'react';
import img from '../images/1.jpg'
const About = () => {
    return (
        <div className="hero  mt-11 p-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="w-64  rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-teal-600">About</h1>
                    <p className="py-6">I'm studying my bachelor's degree in Computer Science
                        and Engineering at Daffodil International University. I am
                        continuously learning Web development in-depth and
                        applying them on various projects. Along with web
                        development I've Experienced in working with research
                        projects based on Machine Learning also I have skill on
                        event management and so on.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default About;