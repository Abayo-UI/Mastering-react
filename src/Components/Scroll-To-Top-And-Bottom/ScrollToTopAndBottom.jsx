import React, { useRef } from 'react';
import './styles-17.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ScrollToTopAndBottom = () => {
     
    const bottomRef = useRef(null);

    // const [ top, setTop ] = useState(0)

    // function calculateTop(){
    //     const  topOfThisComponent = document.documentElement.scrollTop
    //     setTop(topOfThisComponent)
    // }

    // useEffect( ()=> {
    //     calculateTop()
    // })

    function handleScrollToTheTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleScrollToBottom() {
    window.scrollTo(0, document.documentElement.scrollHeight);
  }

  return (
    <div className="top-bottom-container">
         <button  onClick={handleScrollToBottom} className="btn btn-light rounded-5" style={{width:"3.2rem"}}><FiChevronDown size={28} /></button>
          <h3>Click either of the buttons to either scroll to the top or to the bottom.</h3>
         <button  onClick={handleScrollToTheTop} className="btn btn-light rounded-5" style={{width:"3.2rem"}}><FiChevronUp size={28} /></button>
    </div>
  )
}

export default ScrollToTopAndBottom