import React from "react";
import Card from "../../components/UI/Card";

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <Card headerLeft={"Price Details"} style={{ maxWidth: "380px"}}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Price ({props.totalItem} items)</div>
          <div style={{fontWeight:'bold'}}>{"Rs "+props.Price }</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Delivery Charges</div>
          <div style={{fontWeight:'bold'}}>RS. 180</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Total Amount</div>
          <div style={{fontWeight:'bold'}}>{"Rs "+props.totalPrice}</div>
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;
