import React from 'react';
import "./block.css";
import block1 from "../../images/data/Block1.png"
import block2 from "../../images/data/Block2.png"
import block3 from "../../images/data/Block3.png"
import block4 from "../../images/data/Block4.png"

/**
* @author
* @function Block
**/
function onclick(props){
    var index=props;
    console.log(index);
}

const Block = (props) => {
  return(
    <div className='block'>
        <div className='block1'>
            <div className='blockin'>
                <div className='blk1'>
                    <img className='blockimg' src={block1} alt="PRODUCT" />
                </div> 
                <div className='blkBtn'>
                    <button onClick={onclick}>
                        SHOP HERE
                    </button>
                </div>
            </div>
            <div className='blockin'>
                <div className='blk1'>
                    <img className='blockimg' src={block2} alt="PRODUCT" />
                </div> 
                <div className='blkBtn2'>
                    <button onClick={onclick}>
                        SHOP HERE
                    </button>
                </div>
            </div>
        </div>
        <div className='block1'>
            <div className='blockin'>
                <div className='blk1'>
                    <img className='blockimg' src={block3} alt="PRODUCT" />
                </div> 
                <div className='blkBtn'>
                    <button onClick={onclick}>
                        SHOP HERE
                    </button>
                </div>
            </div>
            <div className='blockin'>
                <div className='blk1'>
                    <img className='blockimg' src={block4} alt="PRODUCT" />
                </div> 
                <div className='blkBtn2'>
                    <button onClick={onclick}>
                        SHOP HERE
                    </button>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default Block