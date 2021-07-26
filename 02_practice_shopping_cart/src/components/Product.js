import React from 'react'

const Product = (props) => {
    const {product, onAdd, onRemove} = props
    console.log('Product: '+ product);

    return (
        <div>
            <img className='small' src={product.img} alt={product.title}></img>
            <h3>{product.title}</h3>
            <div>{product.price} Orb</div>
            <button onClick={()=>onAdd()}>Add to Cart</button>
        </div>
    )
}

export default Product;
