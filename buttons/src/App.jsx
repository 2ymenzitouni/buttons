import './App.css'
import AddTocart from './components/addTocart/addTocart'
import { FaShoppingCart } from "react-icons/fa";
function App() {
  return(
    <>
      <AddTocart buttonName={'Add To Cart'} icon={<FaShoppingCart/>} bgColor={'blue'} textColor={'white'}/>
    
    </>
  )
}

export default App
