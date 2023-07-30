import { useContext } from "react";
import { CartContext } from "../../cartContext";
import CardCond from "./cardCond";

const Card = (props) => {
    const {product}= props;
    const cart = useContext(CartContext);
    const prodQuantity = cart.getProductQuantity(product.id);
    const productQuantity = cart.items.reduce((sum, product)=> sum+ product.quantity, 0);
    console.log(cart.items);

    return ( 
        <div className=''>
            <div className='flex flex-col text-center '>
                <h1 className='text-bold text-xl'>{product.title}</h1>
                <span className='py-4'>${product.price}</span>
                {prodQuantity>0?
                (
                <CardCond product={product} cart={cart} productQuantity={prodQuantity}/>
            
                ):
                (
                    <button onClick={()=>cart.addToCart(product.id)} className='rounded text-white text-sm py-1 px-4 bg-blue-600 w-1/2 text-center m-auto cursor-pointer'>Add to Cart</button>
                )
                }
              
            </div>
 
           
           
        </div>
       
     );
}
 
export default Card;