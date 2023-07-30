import React from 'react';



const CardCond = (props) => {


    const {product, cart, productQuantity} = props;
    return ( 
    <div>

        <div className="flex justify-between px-6 py-2 rounded-xl bg-white m-2 ">
            <div>
            <span className="text-bold">In Cart: {productQuantity}</span> 
            </div>
            <div>
                <button onClick={()=>cart.addToCart(product.id)} className="px-2 bg-blue-600 rounded mx-2 text-white cursor-pointer">+</button>
                <button onClick={()=>cart.removeFromCart(product.id)} className="px-2 bg-blue-600 rounded text-white cursor-pointer">-</button>
            </div>
        </div>

        <button className="bg-red-500 py-1 px-2 rounded-xl text-white cursor-pointer " onClick={()=>cart.deleteFromCart(product.id)}>Remove from Cart</button>
    </div>

     );
}
 
export default CardCond;