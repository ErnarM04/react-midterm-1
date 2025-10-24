import { useState } from "react";
import "./ProductCard.css";

function ProductCard(product) {

    const [likes, setLikes] = useState(0);

    return (
        
<div class="flex items-center justify-center w-full h-full">
    <div class="w-full p-4">
        <div class="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div class="prod-title">
                <p class="text-2xl font-bold text-gray-900 uppercase">
                    {product.title}
                </p>
                <p class="text-sm text-gray-400 uppercase">
                    {product.category}
                </p>
            </div>
            <div class="prod-img">
                <img src={product.image} alt={product.title} class="object-cover object-center w-full"/>
            </div>
            <div class="grid gap-10 prod-info">
                <div class="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                    <p class="text-xl font-bold">
                        {product.price}$
                    </p>
                    <button
                    class="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                        Likes {likes}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default ProductCard;