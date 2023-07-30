import { createContext, useState } from "react";
import { productData,getProductData } from "./data";

export const CartContext= createContext({
    items:[],
    getProductQuantity:()=>{},
    removeFromCart:()=>{},
    addToCart:()=>{},
    deleteFromCart:()=>{},
    getTotalCost:()=>{}
});



export function CartProvider({children}){

    const [cartProduct, setCartProduct] = useState([]);

    function getProductQuantity(id){
        const quantity = cartProduct.find(product=>product.id === id)?.quantity;
        if(quantity===undefined){
            return 0;
        }
        return quantity;
    }

    function addToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity===0){
            setCartProduct(
                [
                    ...cartProduct,
                    {id:id, quantity:1}
                ]
            )
        }else{
            setCartProduct(
               cartProduct.map(product=>(product.id === id)?{...product, quantity:product.quantity+1}:{product}) 
            )
        }
    }

    function removeFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity===1){
            deleteFromCart()            
        }else{
            setCartProduct(
               cartProduct.map(product=>(product.id === id)?{...product, quantity:product.quantity-1}:{product}) 
            )
        }
    }

    function deleteFromCart(id){
        setCartProduct(
            cartProduct=> {
                cartProduct.filter(currentProduct=>currentProduct.id !== id
            )
        }
        )

    }


function getTotalCost(){
    let totalCost = 0;
    cartProduct.map(cartItem =>{
        const productData = getProductData(cartItem.id);
        totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
}



    const contextValue = {
        items:cartProduct,
        getProductQuantity,
        removeFromCart,
        addToCart,
        deleteFromCart,
        getTotalCost

    }


    return(
        <CartContext.Provider value={contextValue}> 
            {children}
        </CartContext.Provider> 
    )

   
}

export default CartProvider;