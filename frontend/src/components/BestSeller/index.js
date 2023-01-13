import React from 'react';
import "./best.css";
import set1 from "../../images/data/Product1.png"
import set2 from "../../images/data/Product2.png"
import set3 from "../../images/data/Product3.png"
import set4 from "../../images/data/Product4.png"
import set5 from "../../images/data/Product5.png"

/**
* @author
* @function Best
**/
function onclick(props){
    var index=props;
    console.log(index);
}

const Best = (props) => {
  return(
    <div className='main'>
        <div className='title'>
            <text className='title_txt'>BEST SELLERS</text>
            <a href='/' className='view'>View All</a>
        </div>
        <div className='contents'>
            <img className='set' src={set1} alt="PRODUCT" onClick={onclick(1)}/>
            <img className='set' src={set2} alt="PRODUCT" onClick={onclick(2)}/>
            <img className='set' src={set3} alt="PRODUCT" onClick={onclick(3)}/>
            <img className='set' src={set4} alt="PRODUCT" onClick={onclick(4)}/>
            <img className='set' src={set5} alt="PRODUCT" onClick={onclick(5)}/>
        </div>
    </div>
   )

 }

export default Best