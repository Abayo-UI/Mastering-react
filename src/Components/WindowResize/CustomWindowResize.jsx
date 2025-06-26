import React from 'react'
import './styles-16.css';
import useResize from './useResize';

const CustomWindowResize = () => {
    const dimensionsObject = useResize();
    const { width, height } = dimensionsObject; //destructuring the object
  
  return (
    <div className="resize-container">
        <h1>Window Resize</h1>
        <p className="col-lg-5 col-10">This is a component that uses a custom hook to get your width and height dimensions whenever you resize your screen.</p>
         <p>The current width is: {width}</p>
         <p>The current height is: {height}</p>
    </div>
    
  )
}

export default CustomWindowResize