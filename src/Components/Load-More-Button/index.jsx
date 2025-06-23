import "./styles-4.css";
import { useEffect } from "react";
import { useState } from "react";

function LoadMoreButton({url, limit = 20 }){
    const [ stock, setStock ] = useState([]);
    const [ count, setCount ] = useState(0);

    async function fetchProducts(urllink){
    try{
       const response = await fetch(`${urllink}?limit=${limit}&skip=${count === 0 ? count : count * limit}`);
       const data = await response.json();
       setStock( count === 0 ? data.products : [...stock,...data.products])
    }
    catch(e){
        return e.message;
    }
    }

    function handleClick(){
      
      setCount(count + 1);     
    }

    useEffect(()=> { 
         fetchProducts(url)
    },[count])

    return(
        <div class="Load-more-container ps-4 pe-3 py-3">
            <h3 class="text-center">Welcome to my online store</h3>
            <div class="row mt-2 gap-lg-0">

            { stock.map( item => (
            <div class="border border-1 border-dark col-lg-3 col-6 ">
            <img src={item.thumbnail} class="w-75" alt={item.brand}/>
            <p> <strong>{item.title}</strong> </p>
            <p> <strong>Price: </strong>${item.price} </p>
            <p> <strong>Stock: </strong> {item.stock} </p>
            <p> <strong>Rating: </strong>{item.rating}/5</p>
            </div>
           ))}

            </div>

            {
            stock.length > 0  
            ? count <= 3 ? <div class="text-center mt-2">
                             <button class="col-6 col-lg-3 py-1 rounded-4 mb-3" onClick={handleClick}>Load More Data</button>
                            </div>
                          :<div class="text-center mt-2">
                           <button class="button col-6 col-lg-3 py-1 rounded-4 mb-3" disabled="true">No More Data</button>
                           </div>
            : <div class="text-center mt-2">
                <p>Loading | Please wait...</p>
              </div>
            }
        </div>
    )
}

export default LoadMoreButton;