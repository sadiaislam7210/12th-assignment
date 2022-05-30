import React, { useEffect, useState } from 'react';
import Part from '../Parts/Part';

const AllParts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://sheltered-dawn-88403.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-3 pb-10'>
                {
                    products.map((product, index) => <Part
                        key={index}
                        product={product}
                    >
                    </Part>)
                }
            </div>
        </div>
    );
};

export default AllParts;