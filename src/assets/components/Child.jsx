/* eslint-disable react/prop-types */
import { memo } from 'react'
import './child.css'

// eslint-disable-next-line react/display-name
const Child = memo(({ product, onClick }) => {
  const productClicked = product.clicked || false

  return (
    <div
      className={`product-card ${productClicked ? 'clicked' : ''}`}
      onClick={onClick}
    >
      <img src={product.image} alt={product.title} />
      <div className='product-details'>
        <h2>{product.title}</h2>
        <div className='price'>${product.price}</div>
      </div>
    </div>
  )
})

export default Child
