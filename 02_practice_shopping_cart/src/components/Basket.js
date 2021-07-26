import React from 'react'

const Basket = (props) => {
    const {cartItem, onAdd, onRemove} = props

    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItem.length === 0 && <div>Cart Is Empty.</div>}
                {cartItem.map((item, idx) => (
                    <div className='row'>
                        <div>{item.title}</div>
                        <div>
                            <button onClick={()=> onAdd(item)}>+</button>
                            <button onClick={()=> onRemove(item)}>-</button>
                        </div>
                        <div className='col-2 text-right'>
                            {item.qty} * {item.price.toFixed(2)} บาท
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Basket
