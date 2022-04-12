import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setproducts]=useProducts([])
const [cart, setCart]=useState([])

    /*
    / useEffect(()=>{
        // fetch('products.json')
        // .then(res=>res.json())
        // .then(data=> setproducts(data))
    // },[])
    */

    useEffect(()=>{
        const storedCart=getStoredCart();
        const saveCart =[];
        for(const id in storedCart){
            const addedProduct =products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)
            }
          
        }
       setCart(saveCart);
    },[products])
    const handelToCart=(selectedproduct)=>{
        // cart.push(product)
        let newCart=[]
        const exists = cart.find(product=>product.id === selectedproduct.id)
        if(!exists){
            selectedproduct.quantity=1;
            newCart=[...cart,selectedproduct]
        }
        else{
            const rest = cart.filter(product=>product.id!== selectedproduct.id)
            exists.quantity=exists.quantity+ 1;
            newCart = [...rest,exists]
        }
        setCart(newCart)
        addToDb(selectedproduct.id)
    }
   
    return (
        <div className='shop-container'>
         <div className="products-container">
             {
                products.map(product=><Product
                 key={product.id}
                 product={product}
                 handelToCart={handelToCart}
          ></Product>) 
             }
         </div>
         <div className="cart-container">
           <Cart cart={cart}>
               <Link to="/orders">
                <button> Review Order </button>
               </Link>
           </Cart>
             </div>   
        </div>
    );
};

export default Shop;