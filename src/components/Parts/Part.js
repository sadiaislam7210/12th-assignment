
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ product }) => {

    const { _id, name, img, price, stock } = product;
    const navigate = useNavigate();

    const navigateToPartsDetail = id => {
        navigate(`/parts/${_id}`)

    }

    return (
        <div>
            <div className='mx-auto'>
                <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 border">
                    <div className="px-4 py-2">
                        <h1 className="text-gray-900 font-bold text-2xl uppercase">{name}</h1>
                        <p className='text-green-500'>Instock: {stock}</p>
                    </div>
                    <img className="h-65 w-full object-cover mt-2" src={img} alt="NIKE AIR" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <h1 className="text-gray-200 font-bold text-xl"><span className='text-red-600'>Price: </span>${price}</h1>
                        <button onClick={() => navigateToPartsDetail(_id)} className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded uppercase">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;