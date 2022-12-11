
import { useState } from 'react';
import img from '../images/csm_rafi-group-medien-rafi-logo_89740c89e1.jpg'
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    // return (
    //     <div className="navbar bg-base-100 mt-2 mb-2 ml-11">
    //         <div className="navbar-start">
    //             <div className="dropdown">
    //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">

    //                 </label>
    //                 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    //                     <li><a>Home</a></li>

    //                     <li><a>About</a></li>
    //                     <li><a>Portfolio</a></li>
    //                     <li><a>Contact</a></li>
    //                 </ul>
    //             </div>
    //             <img className='h-16' src={img} alt="" />
    //         </div>
    //         <div className="navbar-center hidden lg:flex">
    //             <ul className="menu menu-horizontal px-1">
    //                 <li><a className='font-bold text-gray-900'>Home</a></li>

    //                 <li><a className='text-semibold'>About</a></li>
    //                 <li><a className='text-semibold'>Portfolio</a></li>
    //                 <li><a className='text-semibold'>Contact</a></li>
    //             </ul>
    //         </div>

    //     </div>
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        }
    ];

    return (
        <div className="flex justify-between items-center h-20  px-4  ">
            <div>
                {/* <h1 className="text-3xl font-signature ml-2">Mustahsin</h1> */}
                <img className='h-20' src={img} alt="" />
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium   hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                        
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>


    );
};

export default Navbar;