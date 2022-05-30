import React from 'react';
import sakib from '../../assets/images/39432dff463c456bb610dd06e409e70f.png';
import sk from '../../assets/images/Screenshot_81.jpg';
import uK from '../../assets/images/awami-league-general-secretary-obaidul-quader.jpeg';
import president from '../../assets/images/chancellor.jpg'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Sakib Al-Hasan',
            review: 'If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, “Duh, I know this already, people say nice things about my business.”',
            img: sakib,
            location: 'Bangladesh'

        },
        {
            _id: 2,
            name: 'Shakib Khan',
            review: 'If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, “Duh, I know this already, people say nice things about my business.”',
            img: sk,
            location: 'Bangladesh'

        },
        {
            _id: 3,
            name: 'Obaidul Quader (MP)',
            review: 'If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, “Duh, I know this already, people say nice things about my business.”',
            img: uK,
            location: 'Bangladesh'

        },
        {
            _id: 4,
            name: 'Abdul Hamid (P)',
            review: 'If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, “Duh, I know this already, people say nice things about my business.”',
            img: president,
            location: 'Bangladesh'

        }
    ];

    return (
        <div className='mt-10'>
            <section className='bg-gray-700 text-white p-5'>
                <div className='pb-5'>
                    <h1 className='text-xl'>Testimonials</h1>
                    <h2 className='text-2xl font-bold'>What our Customers say!!</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mx-10'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonials;