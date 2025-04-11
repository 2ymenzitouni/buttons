function AddTocart({buttonName , icon,bgColor,textColor,borderRadius}) {
  return (
    // backtick `` : ALT GR + 7
    <button className={`AddTocart rounded-${borderRadius}`} style={{backgroundColor:`${bgColor}`,color:`${textColor}`,display:'flex',gap:'0 8px' , fontSize:'15px'}}>{buttonName}{icon} </button>
  )
}

export default AddTocart