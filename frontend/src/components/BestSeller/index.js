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
    var page = '/Necklace-3/63c10ecf32f76d11e8fd589a/p';
    console.log(page);
    
}

const Best = (props) => {
  return(
    <div className='main'>
        <div className='title'>
            <text className='title_txt'>BEST SELLERS</text>
            <a href='/' className='view'>View All</a>
        </div>
        <div className='contents'>
            <a  href='/Necklace/63c277620ee80219f023a48f/p'>
                <img className='set' src={set1} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Necklace
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}500
                    </div>
                </div>
            </a>
            <a  href='/Jhoomer/63c2d60c0ee80219f023a5f6/p'>
                <img className='set' src={set2} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Jhoomer
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}2000
                    </div>
                </div>
            </a>
            <a  href='/Mala/63c1aa5935f93817a096c113/p'>
                <img className='set' src={set3} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Mala
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}1000
                    </div>
                </div>
            </a>
            <a  href='/Bridal-6/63c0e164792ee224b09e1a94/p'>
                <img className='set' src={set4} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Bridal-6
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}999
                    </div>
                </div>
            </a>
            <a  href='/Bali-4/63c2cccd0ee80219f023a56c/p'>
                <img className='set' src={set5} alt="PRODUCT"/>
                <div className='bestimg'>
                    <div className="caProductName">
                        Bali-4
                    </div>
                    <div className="caProductPrice">
                        {'RS. '}3100
                    </div>
                </div>
            </a>
            
        </div>
    </div>
   )

 }

export default Best