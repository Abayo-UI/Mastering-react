import "./styles-3.css";
import { useEffect, useState } from "react";
import { FaCircle } from 'react-icons/fa';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

/*Inside the below function parenthesis, we are destructuring the property
 object. props is an object. So we're extracting the value of
 the url key, limit key and page key from the props object then storing
 them in the respective variables
*/
export default function ImageSlider({url, limit, page}){

/*The useState hook is an example of array destructing in Js, 
 because useState hook returns an array of 2 elements i.e 
 [ valueInsideParenthesis, function ] which in turn get extracted/destructured
 in the const variables on the left
 */
    const [ images, setImages ] = useState([]);
    const [ currentImage, setCurrentImage ] = useState(8);

    function handleLeftButton(){
        if( currentImage === 0) setCurrentImage(images.length -1);
        else setCurrentImage(currentImage - 1);  
    }

    function handleRightButton(){
        if( currentImage === images.length -1)setCurrentImage(0);
        else setCurrentImage( currentImage + 1);
    }

    function selectImage(id){
        setCurrentImage(id)
    }

    async function fetchImages(geturl){
        try{
           const response = await fetch(`${geturl}?limit=${limit}&page=${page}`);
           const data = await response.json();
           setImages(data);
        }
        catch(error){
           error.message
        }
    }

    useEffect( () => { fetchImages(url) })

    return(
        <body id="body">
        <div class="image-container mx-1">
            <h6 class="text-center">This project, fetches the below images from an API</h6>
            <div>
            
               {images.map( (item, key) => (
                 currentImage === key && (
                <div>
                <p id="loading">Loading | Please wait...</p>
                <BsArrowLeftCircleFill onClick={handleLeftButton}/>
                <img src={item.download_url} width="280" height ="190"class="my-2"/>
                <BsArrowRightCircleFill onClick={handleRightButton}/>
                </div>
                )))}    
            </div>

            <div>
                {images.map( (_, key) => 
                  <FaCircle onClick={() => selectImage(key)} class={currentImage === key ? "me-1 FaCirlce-Active" : "me-1 FaCirlce-Inactive"} />
                )}
            </div>
        </div>
        </body>
    )
}