import { Provider } from 'react-redux'

import { store } from './store/store'

import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'

import { productData } from './data/items'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList>
        {productData.map((item) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
      </ProductList>
    </Provider>
  )
}

export default App
