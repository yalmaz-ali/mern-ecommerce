import React from 'react';
import "./box.css";
import box from "../../images/data/BoxCTA.png"

/**
* @author
* @function Box
**/

function onclick(){
    console.log(1);
}

const Box = (props) => {
  return(
    <div className='boxMain'>
        <div className='boxDiv'>
            <img className='box' src={box} alt="BOX" onClick={onclick}/>
        </div>
        <div className='btnDiv'>
            <button onClick={onclick}>
                SHOP
            </button>
        </div>
    </div>
   )

 }

export default Box