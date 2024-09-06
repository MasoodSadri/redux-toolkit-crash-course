import { useState } from 'react'

import { useCartSelector } from '../store/hooks'

import Cart from './Cart'

function Navbar() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.qunatity, 0)
  )

  function handleOpenCart() {
    setCartIsOpen(true)
  }

  function handleCloseCart() {
    setCartIsOpen(false)
  }

  return (
    <>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}
      <div className='navbar'>
        <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
      </div>
    </>
  )
}

export default Navbar
