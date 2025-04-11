import { FaBasketShopping } from "react-icons/fa6";

function Contact({buttonName , icon=<FaBasketShopping />,bgColor,textColor,borderRadius}) {
  return (
    // backtick `` : ALT GR + 7
    <button className={`Contact rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,fontSize:'15px'}}><span style={{display:'flex', alignItems:'center',gap:'0 10px'}}>{buttonName}{icon}</span></button>
  )
}

export default Contact