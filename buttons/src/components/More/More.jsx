import { IoIosArrowForward } from "react-icons/io";

function More({buttonName , icon=<IoIosArrowForward/>,bgColor,textColor,borderRadius}) {
    return (
      <button className={`More rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,display:'flex',alignItems:'center',gap:'0 2px' , fontSize:'15px'}}>{buttonName}  {icon} </button>
    )
  }
  
  export default More