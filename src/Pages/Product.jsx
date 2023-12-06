import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum'
import ProductDisylay from '../ProductDisplay/ProductDisylay'
import DescreptionBox from '../DescreptionBox/DescreptionBox'
import RelatedProduct from '../RelatedProduct/RelatedProduct'

const Product = () => {
  const { all_data } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_data.find((e) => e.id === Number(productId))
  return (
    <div className='productmain'>
      <Breadcrum product={product} />
      <ProductDisylay product={product} />
      <DescreptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
