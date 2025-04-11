import './App.css'
import './index.css'
import AddTocart from './components/addTocart/addTocart'
import { FaShoppingCart } from "react-icons/fa";

function App() {
  return(
    <>
      <AddTocart buttonName={'Add'} icon={<FaShoppingCart/>} bgColor={'blue'} textColor={'white'} borderRadius={'2xl'}/>
    
    </>
  )
}

export default App
