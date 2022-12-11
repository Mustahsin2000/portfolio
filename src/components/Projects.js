import React from 'react';
import img1 from '../images/Screenshot (83).png'
import img2 from '../images/Screenshot (84).png'
import img3 from '../images/Screenshot (85).png'
const Projects = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-11 mb-11'>
            <div className="card shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        doctors-portal
                        <div className="badge badge-primary">full stack</div>
                    </h2>
                    <p>● In this project there are two sections one is for users and another is for admin with
                        login System via firebase authentication. <br />
                        ● Users can take appointment, then pay for their appointment. <br />
                        ● Admin can manage both users and doctors properly ,they can add doctors,
                        delete doctors also add admin </p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-primary btn-outline"><a href="https://doctors-portal-55870.web.app">Live Site</a></div>

                    </div>
                </div>
            </div>

            <div className="card shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Mobile-resale website
                        <div className="badge badge-primary">full stack</div>
                    </h2>
                    <p>● Here one buyer can buy mobles and can see their orders properly. <br />
                        ● Then admin can manage all property such as byers, add products, and all
                        the products list. <br />
                        ● Also buyers can pay their orders price via card payment. </p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-primary btn-outline"><a href="https://mobile-resale-821a5.web.app">Live Site</a></div>

                    </div>
                </div>
            </div>


            <div className="card shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Dental-point
                        <div className="badge badge-primary">full stack</div>
                    </h2>
                    <p>● A website who has different kinds of services. Patient can view service details and
book those services, and also delete those bookings. <br />
● Also have a review part, and a add service part
</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-primary btn-outline"><a href="https://dental-point-6a6c6.web.app">Live Site</a></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;