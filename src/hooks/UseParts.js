
import { useEffect, useState } from 'react';

const UseParts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-dawn-88403.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts]
};

export default UseParts;
