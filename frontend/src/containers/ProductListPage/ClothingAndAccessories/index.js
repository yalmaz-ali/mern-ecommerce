import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { Link } from "react-router-dom";

import "./style.css";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const consoleLog=()=>{
    // {product.products.map((product)=>(
    //   {product.productPictures[0]}
    //   ))
    // }
  };

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, [dispatch, props]);

  return (
    <div className="caDiv">
      <Card className='caMain'>
        {product.products.map((product) => (
          <div className="caContainer" onClick={consoleLog}>
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={product.productPictures[0].img} alt="imgs"/>
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                {'RS. '}
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
