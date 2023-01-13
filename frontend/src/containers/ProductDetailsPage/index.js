import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import { addToCart } from "../../actions";
import MenuHeader from "../../components/MenuHeader";

/**
 * @author
 * @function ProductDetailsPage
 **/

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  
  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  // const [currimg,SetCurrimg]=useState(product.productDetails.productPictures[0].img);
  
  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }
  // const imageRender=()=>{
  //   console.log(1);
  // }

  return (
    <Layout>
      <MenuHeader/>
      {/* <div>{product.productDetails.name}</div> */}
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                <img src={thumb.img} alt={thumb.img} />
              </div>
            ))}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
                src={product.productDetails.productPictures[0].img}
                alt={`${product.productDetails.productPictures[0].img}`}
              />
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#53118F"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                  padding:'10px'
                }}
                icon={<IoMdCart style={{marginRight:"5px",marginBottom:"-2px"}}/>}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              {/* <MaterialButton
                title="BUY NOW"
                bgColor="#933DC9"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                  padding:'10px'
                }}
                icon={<AiFillThunderbolt />}
              /> */}
            </div>
          </div>
        </div>
        <div style={{marginTop:"10px",marginLeft:"20px"}}>
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Jewellery</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productDetails.name}</a>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <h4 className="productTitle">{product.productDetails.name}</h4>
            <div style={{    margin: "10px 0px"}}>
              <span className="ratingCount">
                4.3 <IoIosStar/>
              </span>
              <span className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            {/* <div className="extraOffer">
              Extra RS
              4500 off{" "}
            </div> */}
            <div className="flexRow priceContainer">
              <span className="price">
                RS{' '}
                {product.productDetails.price}
              </span>
              {/* <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span> */}
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
