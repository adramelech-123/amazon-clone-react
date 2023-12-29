import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "../components";
import { US_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };


   const handleAddToCart = () => {
     // Create a copy of the product object and update its quantity property
     const productWithQuantity = { ...product, quantity };
     dispatch(addToCart(productWithQuantity));
   };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product?.title) return <h1>Loading Product...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazon-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* Left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="" />
            </div>
            {/* Middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* Right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                {US_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                RRP:{" "}
                <span className="line-through">
                  {US_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="ml-2 p-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={handleAddToCart}
                  className="btn"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ProductPage;
