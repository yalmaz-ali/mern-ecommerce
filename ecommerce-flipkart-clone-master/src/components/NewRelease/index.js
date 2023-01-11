import React from 'react';
import "./new.css";
import set1 from "../../images/data/new_Product1.png"
import set2 from "../../images/data/new_Product2.png"
import set3 from "../../images/data/new_Product3.png"
import set4 from "../../images/data/new_Product4.png"
import set5 from "../../images/data/new_Product5.png"

/**
* @author
* @function New
**/
function onclick(props){
    var index=props;
    console.log(index);
}

const New = (props) => {
  return(
    <div className='newmain'>
        <div className='newtitle'>
            <text className='newtitle_txt'>NEW RELEASES</text>
            <a href='/' className='newview'>View All</a>
        </div>
        <div className='contents'>
            <img className='newset' src={set1} alt="PRODUCT" onClick={onclick(1)}/>
            <img className='newset' src={set2} alt="PRODUCT" onClick={onclick(2)}/>
            <img className='newset' src={set3} alt="PRODUCT" onClick={onclick(3)}/>
            <img className='newset' src={set4} alt="PRODUCT" onClick={onclick(4)}/>
            <img className='newset' src={set5} alt="PRODUCT" onClick={onclick(5)}/>
        </div>
    </div>
   )

 }

export default New