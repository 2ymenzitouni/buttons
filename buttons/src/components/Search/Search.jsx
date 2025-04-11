import { IoSearchSharp } from "react-icons/io5";

function Search({buttonName , icon=<IoSearchSharp/>,bgColor,textColor,borderRadius}) {
    return (
      <button className={`Search rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,display:'flex',alignItems:'center',gap:'0 10px' , fontSize:'15px'}}>{buttonName} {icon} </button>
    )
  }
  
  export default Search