import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {
    const {id,product}=useParams();
    const url = `http://localhost:5000/ordering/${id}`

    const {data:ordered, isLoading}=useQuery(['ordering',id], ()=>fetch(url,{
        method: 'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res=>res.json()));

if(isLoading){
    return <Loading></Loading>
}



    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {ordered.product}</p>
                    <h2 class="card-title">Please Pay for {}</h2>
                    
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;