const productData =[
    {
        id:1,
        title:'Sunglasses',
        price:10
    },
    {
        id:2,
        title:'Coffee',
        price:20
    },
    {
        id:3,
        title:'Clipper',
        price:19
    },
    {
        id:4,
        title:'Game pad',
        price:25
    },

]




function getProductData(id){
    const productD = productData.find(product=>product.id===id);
    if(productD===undefined){
        return null;
    }
    return productD;
}


export {productData, getProductData};