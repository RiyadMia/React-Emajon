import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total =0;
    let shipping =0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.
        quantity;
        total = total + product.price * product.quantity;
        shipping = shipping+product.shipping;
       
    }
    const tex = parseFloat((total * 10/100).toFixed(2));
    const greatTotal = (total+shipping+tex);
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items : {quantity} </p>
            <p>Total price : $ {total} </p>
            <p>Total shipping : $ {shipping} </p>
            <p>Tex : $ {tex}</p>
            <h5>Grand Total : $ {greatTotal}</h5>
            {props.children}
        </div>
    );
};

export default Cart;