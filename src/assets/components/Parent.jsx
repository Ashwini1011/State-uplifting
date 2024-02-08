import { useEffect, useState, useCallback } from 'react'
import './Parent.css'
import Child from './Child'

const Parent = () => {
  //------------------------------useState and variables section-----------------------------------
  const [products, setProducts] = useState([])

  // -------------------------------api callings and useeffect section--------------------------------------
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((data) => {
        // setProducts(data)
        setProducts(data.map((product) => ({ ...product, clicked: false })))
      })
      .catch((err) => {
        console.log('Error : ', err)
        setProducts([])
      })
  }, [])

  //-----------------------------------------handleClick function to handle card click and change color------

  const handleCardClick = useCallback((productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, clicked: !product.clicked }
          : product
      )
    )
  }, [])

  //-------------------------------------------Return section for ui-------------------------------------------

  return (
    <div className='products-container'>
      <h1>My Products</h1>
      <div className='products-list'>
        {products.map((product) => (
          <Child
            key={product.id}
            product={product}
            onClick={() => handleCardClick(product.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Parent
