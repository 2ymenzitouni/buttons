function AddTocart({buttonName , icon,bgColor,textColor}) {
  return (
    // backtick `` : ALT GR + 7
    <button style={{backgroundColor:`${bgColor}`,color:`${textColor}`}}>{buttonName}{icon}</button>
  )
}

export default AddTocart