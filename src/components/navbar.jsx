import React, { useState, useContext } from 'react';
import { CartContext } from '../cartContext';
import ProductCart from './common/productCart';

const Navbar = () => {  
    const cart = useContext(CartContext);
    const items = cart.items;
    const productItem = items.reduce((a,b)=>a + b.quantity,0);


     const [show,setShow] = useState(false);
        const handleShow = ()=>{
            setShow(true);
        }

        const handleClose=()=>{
            setShow(false);
        }

    return ( 

        <>
            <div className='px-20 py-3 flex justify-between items-center bg-gray-100 '>
                <div className="logo">Ecommerce Store</div>
                <div>
                    <button className={`px-8 py-1 bg-blue-600 text-center rounded text-white`} onClick={handleShow}>Cart ({productItem} items)</button>
                </div>
            </div>

            <modal className={`w-1/4 bg-white border-solid mx-auto absolute top-20 right-1/3 p-5 ease-in-out rounded  ${!show?"opacity-0 ":"opacity-1 backdrop-blur"} `}>
                    <div className=' flex justify-between items-center p-3 text-2xl border-b-2 border-gray-600 '>
                        <span>Shopping Cart</span>
                        <div className='active:relative top-1 ' onClick={handleClose}>
                            <div className={`w-6 h-1 bg-gray-900  transition-transform rotate-45  `}></div>
                            <div className={`w-6 h-1 bg-gray-900 transition-transform -rotate-45`}></div>
                        </div>
                        
                    </div>
                    <div className="modal-content px-3 py-3">
                        
                        <h1>Items in your cart:</h1>
                        {items.map(item=>(
                            <ProductCart item={item.id} />
                        ))}
                    </div>

            </modal>
           </>
     );
}
 
export default Navbar;


