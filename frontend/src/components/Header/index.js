import React, { useEffect, useState } from "react";
import "./style.css";
// import flipkartLogo from "../../images/logo/flipkart.png";
import jewelleryLogo from "../../images/logo/img.jpg";
import loginImg from "../../images/logo/loginImg.jpg";
// import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "SuperCoin Zone", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <div className="loginButton">
            <a onClick={() => {
                setSignup(false);
                setLoginModal(true);
              }}>
              <img src={loginImg} className="loginimage" alt="pic" />
            </a>
          </div>
          // <a
          //   className="loginButton"
          //   onClick={() => {
          //     setSignup(false);
          //     setLoginModal(true);
          //   }}
          // >
          //   Login
          // </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              {signup?<h2 style={{color:"#9c51e0"}}>SIGN UP</h2>:<h2 style={{color:"#9c51e0"}}>LOG IN</h2>}
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#9c51e0"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center",color:"darkblue" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#9c51e0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        
        {/* HOME */}
        <div className="home">
          <a href="/" className="leftmenu" >
            HOME
          </a>
          <a href="/" className="leftmenu" >
            SHOP
          </a>
          <a href="/aboutUs" className="leftmenu" >
            ABOUT US
          </a>
          <a href="/contactUs" className="leftmenu" >
            CONTACT US
          </a>
        </div>
        {/* HOME ENDS */}
        
        {/* Logo  */}
        <div className="logo">
          <a href="/" className="logoanchor">
            <text className="logoimage">THE JEWELLERY TALE</text>
            {/* <img src={jewelleryLogo} className="logoimage" alt="" /> */}
          </a>
        </div>
        {/* logo ends here */}


        {/* right side menu */}
        <div className="rightMenu">

          {/* CART */}
          <div className="cartdiv">
            <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length}/>
            </a>
          </div>
          {/* CART ENDS */}

          {/* search component */}
            <div className="searchInputContainer">
              <div className="searchIconContainer">
                <IoIosSearch
                  style={{
                    color: "white",
                    width:"20px",
                    marginTop:"5px"
                  }}
                />
              </div>
              <div className="header-search">
                <input
                  className="searchInput"
                  placeholder={"SEARCH"}
                />
              </div>
            </div>
          {/* search component ends here */}
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;
