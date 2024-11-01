import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './componenets/ProductCard/ProductCard'
import Cart from './componenets/Cart/Cart'
import ProductList from './componenets/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ProductList />
    <Cart />
    </>
  )
}

export default App
