import React, { Component, useContext } from 'react'
import Card from '../components/common/card';
import { productData } from '../data';


class Product extends Component {
    render() { 
        return (
            <div>
                <h1 className='text-center my-10 text-3xl font-bold text-gray-700'>Welcome to my store</h1>
                <div className="flex justify-center m-10">
                    {productData.map(product=>(
                    <div className='m-4 justify-center items-center py-5 w-1/4 rounded-lg bg-gray-100 shadow-inner '>
                        <Card product={product}/>
                    </div>
                ))}
                </div>
             

            </div>


        );
    }
}
 
export default Product;


