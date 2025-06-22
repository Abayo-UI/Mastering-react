import Accordion  from "./Components/Accordion";
import ImageSlider from "./Components/Image-Slider";
import LightDarkMode from "./Components/Light-dark-mode";
import LoadMoreButton from "./Components/Load-More-Button";
import ModalTest from "./Components/ModalPopup/ModalTest";
import QrCodeGenerator from "./Components/Qr-Code-Generator";
import Colorgenerator from "./Components/Random-Color-Generator";
import ScrollIndicator from "./Components/Scroll-indicator";
import StarRating from "./Components/Star-Rating";
import Tabs from "./Components/Tabs";
import Treeview from "./Components/Tree-view";
import data from "./Components/Tree-view/data";
 
function App() {
  return (
    <div>
      <QrCodeGenerator/>
      <ModalTest/>
      <LightDarkMode/>
      <Accordion/>
      <StarRating/>
      <Treeview menus={data}/>
      <Colorgenerator/>
      <LoadMoreButton url="https://dummyjson.com/products"/>
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="3"/>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <Tabs/>
    </div>
  );
}

export default App;
