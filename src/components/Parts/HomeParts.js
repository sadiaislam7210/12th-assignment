import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Part from './Part';

const HomeParts = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-dawn-88403.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold text-red-500 mt-10'>Feature Products</h1>
                <progress class="progress w-56"></progress>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-3 pb-10'>
                {
                    products.slice(0,4).map((product, index) => <Part
                        key={index}
                        product={product}
                    >
                    </Part>)
                }
            </div>
            <div>
            <Link to='/part'><button class="btn btn-warning">See more</button></Link>
            </div>
        </div>
    );
};

export default HomeParts;