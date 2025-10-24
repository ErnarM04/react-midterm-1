import { useState } from "react";
import "./SearchProduct.css";

function SearchProduct({ receivedCategories, filterCategory, searchProduct }) {
  const [value, setValue] = useState("");

  function changeCategory(category) {
    console.log("Selected category:", category);
    filterCategory(category);
  }

  function handleChange(e){
    setValue(e.target.value);
    searchProduct(e.target.value);
  }

  function clearFilter(){
    console.log("Filter cleared")
    setValue("");
    searchProduct("");
  }

  return (
    <div>
      
<div>
    <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    
                    <div class="hidden md:block">
                      
                        <div class="flex items-baseline space-x-4">
                          {receivedCategories.length > 0
          ? receivedCategories.map((category) => (
              <a key={category} class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" 
              onClick={() => category !== "all categories" ? changeCategory(category) : clearFilter()}>
                {category}
              </a>
            ))
          : console.log("Loading categories...")}
                            
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="flex -mr-2 md:block">
                        <form class="flex flex-col justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div class=" relative ">
                                <input type="text" value={value} onChange={handleChange} 
                                id="&quot;form-subscribe-Search" 
                                class=" rounded-lg border-transparent m-0 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Search"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            </nav>
        </div>


      <div>
        
      </div>
    </div>
  );
}

export default SearchProduct;
