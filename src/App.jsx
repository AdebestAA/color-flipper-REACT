import React, { useState } from 'react'

const sytlesForButton = {cursor:"pointer",background:"white",marginTop:"10px",width:"20%"}

const App= () => {
const [color,setColor] = useState("yellow")
const [typeOfColor,settypeOfColor] = useState("hex")
const mathRandomNumber = (length)=>{
  return Math.floor(Math.random() * length)

}

const handleRbgColor = ()=>{
  settypeOfColor("rgb")
  const r = mathRandomNumber(256)
  const g = mathRandomNumber(256)
  const b = mathRandomNumber(256)
  const rgb = `rgb(${r},${g},${b})`
  setColor(rgb)
}
const hanldeHexColor = ()=>{
   settypeOfColor("hex")
const hexColorValues  = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let hexColor = "#"
for (let i = 0; i < 6; i++) {
  hexColor += hexColorValues[mathRandomNumber(hexColorValues.length)]
  setColor(hexColor)
}
}



  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      background:color
    }}>
    <nav style={ {display:"flex",justifyContent:"space-evenly"}
}>
      <button style={sytlesForButton} onClick={hanldeHexColor}>getHexColors</button>
      <button style={sytlesForButton} onClick={handleRbgColor}> getRGBcolor</button>
      <button style={sytlesForButton} onClick={typeOfColor === "hex" ? handleRbgColor : hanldeHexColor  } >RandomColor</button>
      </nav>
<section style={{width:"20%",marginTop:"30%",marginInline:"auto"}}>

      <h1>{typeOfColor}:{color}</h1>
</section>
    </div>
  )
}

export default App
