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
            <a  href='/Mala-2/63c1aa7e35f93817a096c11b/p'>
                <img className='set' src={set1} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Mala-2
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}2000
                    </div>
                </div>
            </a>
            <a  href='/Madrasi-5/63c2ee4f23b0352340c49d25/p'>
                <img className='set' src={set2} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                    Madrasi-5
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}600
                    </div>
                </div>
            </a>
            <a  href='/Bindiya-Kanta/63c2cedb0ee80219f023a5a8/p'>
                <img className='set' src={set3} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                    Bindiya Kanta
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}800
                    </div>
                </div>
            </a>
            <a  href='/Bracelet-4/63c27b620ee80219f023a513/p'>
                <img className='set' src={set4} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                    Bracelet-4
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}3000
                    </div>
                </div>
            </a>
            <a  href='/Ring-3/63c2d4f20ee80219f023a5d8/p'>
                <img className='set' src={set5} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                    Ring-3
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}2500
                    </div>
                </div>
            </a>
            
            </div>
    </div>
   )

 }

export default New