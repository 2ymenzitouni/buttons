import { RxCross1 } from "react-icons/rx";

function Delete({buttonName , icon=<RxCross1/>,bgColor,textColor,borderRadius}) {
    return (
      <button className={`Delete rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,display:'flex',alignItems:'center',gap:'0 8px' , fontSize:'15px'}}>{buttonName} <span></span> {icon} </button>
    )
  }
  
  export default Delete