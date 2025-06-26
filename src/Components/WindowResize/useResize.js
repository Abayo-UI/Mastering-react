import { useLayoutEffect, useState } from "react";


export default function useWindowResize(){
    
    const [ windowResize, setWindowResize ] = useState({
        width:0,
        height: 0
    })

    function resizeScreen(){
        setWindowResize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
 
    useLayoutEffect( ()=>{
        resizeScreen();
        window.addEventListener("resize", resizeScreen)

        return ()=> { window.removeEventListener("resize", resizeScreen)}
    }, [])

    return windowResize;
}