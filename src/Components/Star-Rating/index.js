import "./styles-2.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { FaStar } from 'react-icons/fa';
import { useState } from "react";


function StarRating(){

    const [ clicked,setClicked ] = useState(-1);
    const [ selected, setSelected ] = useState(-1);

    function handleMouseMove(index){
        setSelected(index);
    }

    function handleClick(index){
        setClicked(index);
    }

    return(
        <div class="container">
            <div class="col-lg-4 col-10">
            <p class="fs-5">This is the <span id="G">G</span><span id="o1">o</span><span id="o2">o</span><span id="g">g</span><span id="l">l</span><span id="e">e</span> Star Rating Feature. Open it in your Laptop to see it capabilities</p> 
            <div>
              { [...Array(5)].map( ( _,key) =>
              <FaStar class={ selected >= key || clicked >= key ? "FaStarOrange" : "FaStarBlack"}
              onMouseMove={ () => handleMouseMove(key) }
              onMouseLeave={ () =>setSelected(-1)}
              onClick={ () => handleClick(key) }
              /> 
            )}
            </div>
            </div>
        </div>
    )
}

export default StarRating;