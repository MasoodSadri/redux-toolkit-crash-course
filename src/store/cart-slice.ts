import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: string
  title: string
  price: number
  qunatity: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.items[itemIndex].qunatity++
      } else {
        state.items.push({ ...action.payload, qunatity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (state.items[itemIndex].qunatity === 1) {
        state.items.splice(itemIndex, 1)
      } else {
        state.items[itemIndex].qunatity--
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
