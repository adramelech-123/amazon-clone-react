import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { callAPI } from "../utils/CallApi"

const ProductPage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)

  const getProduct = () => {
    callAPI(`data/products.json`)
    .then((productResults) => {
      setProduct(productResults[id])
    })
  }

  useEffect(() => {
    getProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!product?.title) return <h1>Loading Product...</h1>

  return (
    product && <div>ProductPage {product.title}</div>
  )
}
export default ProductPage