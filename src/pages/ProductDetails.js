
import ProductData from "../components/Main/Content/ProductData"

import { useParams } from "react-router-dom"

const ProductDetails = () => {
    
    const {productId}=useParams()
  return (
    <ProductData prodId={productId} />
  )
}

export default ProductDetails

