/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/outline"

const ProductRatings = ({avgRating, ratings}) => {
    
    const ratingNumber = ratings
    const filledStars = Math.floor(avgRating);
    const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      
      {Array.from({ length: filledStars }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
        />
      ))}

      {Array.from({ length: emptyStars }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] h-[20px]"
        />
      ))}

      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
}
export default ProductRatings