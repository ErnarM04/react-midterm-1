import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ title, price, category, description, image, rating }) {
  const [likes, setLikes] = useState(rating.count);
  const [isLiked, setIsLiked] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  function like() {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  }

  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-2xl p-6 h-full">
      <div>
        <div className="text-center mb-4">
          <p className="text-2xl font-bold uppercase text-gray-900 line-clamp-3">
            {title}
          </p>
          <p className="text-sm text-gray-400 uppercase">{category}</p>
        </div>
        <div className="flex items-center justify-center h-56 w-full">
            <img
              src={image}
              alt={title}
            className="object-contain h-56 w-full mix-blend-multiply"
            />
        </div>
        <p className={`text-sm text-gray-700 mt-4 ${showDesc ? '' : 'line-clamp-5'}`}>
            {description}
        </p>
        <a onClick={() => setShowDesc(!showDesc)} className="text-sm text-blue-600">{showDesc ? "Show less" : "Show more"}</a>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="text-xl font-bold">{price}$</p>
        <button
          onClick={like}
          className={`px-6 py-2 uppercase transition duration-200 ease-in border-2 rounded-full ${
            isLiked
              ? "bg-gray-900 text-white border-gray-900"
              : "border-gray-900 text-gray-900 hover:bg-gray-800 hover:text-white"
          }`}
        >
          Likes {likes}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
