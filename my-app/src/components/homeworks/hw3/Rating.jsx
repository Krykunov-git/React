import { useState } from "react";


function Rating() {

const ratingList = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/800px-PNG_transparency_demonstration_1.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/1024px-SVG_logo.svg.png",
   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/800px-PNG_transparency_demonstration_1.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/1024px-SVG_logo.svg.png"]

    const[rating,ratingValue] = useState(0)

    return(
        <div>
      
      <img src={ratingList[rating]} alt="Оценка" style={{ width: '150px' }} />

   <button style={{ backgroundColor: "green" ,width: '150px' }} onClick={() => ratingValue(0)}>1</button>
    <button style={{ backgroundColor: "green" ,width: '150px' }} onClick={() => ratingValue(1)}>2</button>
    <button style={{ backgroundColor: "green" ,width: '150px' }} onClick={() => ratingValue(2)}>3</button>
    <button  style={{backgroundColor: "green" ,width: '150px' }} onClick={() => ratingValue(3)}>4</button>
        </div>
    )


}

export default Rating