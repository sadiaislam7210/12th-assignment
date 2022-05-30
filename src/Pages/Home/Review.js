import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl text-black">
                <div className="card-body">
                    <p>{review.review}</p>
                    <div className="">
                        <div className="avatar pt-10">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;