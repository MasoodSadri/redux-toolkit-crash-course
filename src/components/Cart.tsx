import { createPortal } from 'react-dom'

import CartItems from './CartItems.tsx'

type CartProps = {
  onClose: () => void
}

function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className='cart-backdrop' />
      <dialog className='cart-modal' open>
        <h2>سبد خرید</h2>
        <CartItems />
        <p className='cart-actions'>
          <button onClick={onClose}>بستن</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  )
}

export default Cart
