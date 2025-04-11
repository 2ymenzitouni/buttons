import { FaBasketShopping } from "react-icons/fa6";

function AddTocart({buttonName , icon=<FaBasketShopping />,bgColor,textColor,borderRadius}) {
  return (
    // backtick `` : ALT GR + 7
    <button className={`AddToCart rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,display:'flex', alignItems:'center',gap:'0 8px' , fontSize:'15px'}}>{buttonName}{icon} </button>
  )
}

export default AddTocart