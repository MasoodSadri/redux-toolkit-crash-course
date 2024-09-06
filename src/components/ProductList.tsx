import { type ReactNode } from 'react'

type ProductListProps = {
  children: ReactNode
}

function ProductList({ children }: ProductListProps) {
  return (
    <div className='product-list'>
      <div className='product-items'>{children}</div>
    </div>
  )
}

export default ProductList
