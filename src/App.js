import Accordion  from "./Components/Accordion";
import ImageSlider from "./Components/Image-Slider";
import LightDarkMode from "./Components/Light-dark-mode";
import LoadMoreButton from "./Components/Load-More-Button";
import QrCodeGenerator from "./Components/Qr-Code-Generator";
import Colorgenerator from "./Components/Random-Color-Generator";
import StarRating from "./Components/Star-Rating";
import Treeview from "./Components/Tree-view";
import data from "./Components/Tree-view/data";
 
function App() {
  return (
    <div>
      <QrCodeGenerator/>
      <LightDarkMode/>
      <Accordion/>
      <StarRating/>
      <Treeview menus={data}/>
      <Colorgenerator/>
      <LoadMoreButton url="https://dummyjson.com/products"/>
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="3"/>
    </div>
  );
}

export default App;
