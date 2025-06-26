import Accordion  from "./Components/Accordion";
import GithubProfileFinder from "./Components/Github-profile-finder";
import ImageSlider from "./Components/Image-Slider";
import LightDarkMode from "./Components/Light-dark-mode";
import LoadMoreButton from "./Components/Load-More-Button";
import ModalTest from "./Components/ModalPopup/ModalTest";
import QrCodeGenerator from "./Components/Qr-Code-Generator";
import Colorgenerator from "./Components/Random-Color-Generator";
import ScrollIndicator from "./Components/Scroll-indicator";
import ScrollToTopAndBottom from "./Components/Scroll-To-Top-And-Bottom/ScrollToTopAndBottom";
import AutoComplete from "./Components/search-autocomplete-with-api/AutoComplete";
import StarRating from "./Components/Star-Rating";
import Tabs from "./Components/Tabs";
import TicToeGame from "./Components/TicToeGame/TicToeGame";
import Treeview from "./Components/Tree-view";
import data from "./Components/Tree-view/data";
import UseOnclickOutsideTest from "./Components/Use-onclick-Outside/test";
import FetchApiDataWithCustomHook from "./Components/useFetch-Custom-hook/FetchApiDataWithCustomHook";
import CustomWindowResize from "./Components/WindowResize/CustomWindowResize";
 
function App() {
  return (
    <div>
      <GithubProfileFinder url={"https://api.github.com/users"}/>
      <TicToeGame/>
      <QrCodeGenerator/>
      <ScrollToTopAndBottom/>
      <AutoComplete url={"https://dummyjson.com/users"}/>
      <LightDarkMode/>
      <Accordion/>
      <ModalTest/>
      <StarRating/>
      <Treeview menus={data}/>
      <UseOnclickOutsideTest/>
      <LoadMoreButton url="https://dummyjson.com/products"/>
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="3"/>
      <Tabs/>
      <Colorgenerator/>
      <CustomWindowResize/>
      <FetchApiDataWithCustomHook/>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
