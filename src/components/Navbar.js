
import img from '../images/Logo_Rafi.jpg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-2 mb-2 ml-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>

                        <li><a>About</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <img className='h-16' src={img} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='font-bold text-gray-900'>Home</a></li>

                    <li><a className='text-semibold'>About</a></li>
                    <li><a className='text-semibold'>Portfolio</a></li>
                    <li><a className='text-semibold'>Contact</a></li>
                </ul>
            </div>

        </div>



    );
};

export default Navbar;