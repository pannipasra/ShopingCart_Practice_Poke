import React from 'react'
import Product from './Product'

const Main = (props) => {
    const {poke_data, onAdd} = props
    console.log(poke_data);

    return (
        <main className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {poke_data.map((e, idx) => (
                <Product 
                product={e}
                onAdd={onAdd}
                />))}
            </div>
        </main>
    )
}

export default Main
