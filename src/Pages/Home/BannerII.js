import React from 'react';
import mechanic from '../../assets/images/pngwing.com (2).png'

const BannerII = () => {
    return (
        <div className='mt-10 rounded-lg'>
            <div className="hero min-h-screen bg-amber-600 text-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Useful Information about the Auto Parts!</h1>
                        <p className="py-6">A car is an important part of many individual's daily lives. Driving a car can be stressful but it can also give you some relaxation and pleasure. Knowing about car basics will help with an overall better understanding of how it works and what to do in different situations.</p>
                        <div className="form-control mt-6">
                            <button className="btn bg-black">Get start</button>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img src={mechanic} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerII;