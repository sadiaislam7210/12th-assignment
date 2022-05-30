import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const AddCart = ({ product, quantity, setProduct }) => {

    const { _id, name, price } = product;

    const [user, loading] = useAuthState(auth);

if(loading){
    return <Loading></Loading>
}

    const handleAddCart = event => {
       
        // const quantity = event.target.quantity.value;
        // const price = event.target.price.value;
        // console.log(name, quantity, price, _id);

        const ordering ={
        productId: _id,
        product:name,
        buyerName:user.displayName,
        buyer:user.email,
        quantity:quantity,
        price:price
        }
        // console.log(ordering);

        fetch('https://sheltered-dawn-88403.herokuapp.com/ordering', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordering)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    // setProduct(null)
                    toast(`Your order is successfull`)
                }
                else{
                    toast.error(`Your ordered failed`)
                }
            });
            event.preventDefault();
    };


    return (
        <div>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                {/* <label for="cart-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}

                    <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleAddCart} className='App grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" name="name" defaultValue={user?.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" defaultValue={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="quantity" defaultValue={quantity} disabled placeholder="Quantity" className="input input-bordered w-full max-w-xs"
                        />

                        <input type="number" name="price" defaultValue={price * quantity} disabled placeholder="price" className="input input-bordered w-full max-w-xs" />

                        {/* <input type="submit" value="Submit" className="btn w-full max-w-xs" /> */}

                        {/* <div className='modal-action'>
                        <input for="cart-modal" type="submit" value='Submit' className="btn modal-button w-full max-w-xs" /> */}
                        {/* <label type="submit" for="cart-modal" class="btn">Yay!</label> */}
                        
                        {/* </div> */}
                        
                        <button type="submit"><label htmlFor="cart-modal"className='btn w-full max-w-xs' >Submit</label></button>

                       {/* <input type="submit" htmlFor="cart-modal" className="btn w-full max-w-xs" /> */}

                       {/* <button htmlFor="cart-modal">GGHJHJFGDS</button> */}
                    </form>
                </div>
            </div>

{/* <input type="checkbox" id="cart-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="cart-modal" class="btn">Yay!</label>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default AddCart;