import React from 'react'

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className='cart-buttons'>
                <input type="text" value={item.quantity}
                    onChange={(e) => onUpdateCart(item, parseInt(e.target.value))} />
                <button onClick={(e) => onRemoveFromCart(item)}>remover</button>
            </div>
        </div>
    )
}

export default CartItem