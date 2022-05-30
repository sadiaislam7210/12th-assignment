import React from 'react';

const Count = () => {
    return (
        <div className='bg-orange-400 mt-10 rounded-lg'>
            <progress className="progress w-56"></progress>
            <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-2 pb-10">


                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="stat place-items-center">
                            <div className="stat-title">Customer</div>
                            <div className="stat-value">100K+</div>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="stat place-items-center">
                            <div className="stat-title">Annual revenue</div>
                            <div className="stat-value text-secondary">120M+</div>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="stat place-items-center">
                            <div className="stat-title">Reviews</div>
                            <div className="stat-value">33K+</div>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="stat place-items-center">
                            <div className="stat-title">Tools</div>
                            <div className="stat-value">50K+</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;