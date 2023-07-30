import { getProductData } from "../../data";
import { useContext } from "react";
import { CartContext } from "../../cartContext";



function ProductCart(props){
    const id = props.item
    const cart =useContext(CartContext);
    const quantity = cart.getProductQuantity(id);
    const productD = getProductData(id);
    const total = quantity * productD.price

return(
    <>
      <div className="my-1 ">
        <h1 className="font-bold text-2xl text-gray-500">{productD.title}</h1>
        <h1 className="text-gray-500">{quantity} total</h1>
        <p className="my-3 text-gray-500">${total}</p>
        <button onClick={()=>cart.deleteFromCart(productD.id)} className="bg-blue-500 text-white text-sm p-1 rounded my-2">Remove</button>
      </div>  
     <hr/>
   
    </>
  
    
)


}

export default ProductCart;