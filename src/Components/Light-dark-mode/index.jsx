import "./styles-7.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from "./useLocalStorage";


export default function LightDarkMode(){
    const [ theme, setTheme ] = useLocalStorage( "theme","light" );

    function changeTheme(){
      setTheme( theme === "light" ? "dark" : "light");
    }

    return(
        <div class="light-dark-container" data-theme={theme}>
          
          <ul>
          <p>This project uses a custom hook :</p>
            <li>To Change the theme</li>
            <li>To Maintain the theme</li>
            <li>And to save the selected theme in your browsers Local Storage incase you refresh the page</li>
          </ul>
          <button class="rounded-4 p-2" onClick={changeTheme}>Change Theme</button>
        </div>
    )
}