import React from "react";
import "./style.css";
import pic from "../../images/data/instagram.png";
import pic2 from "../../images/data/twitter.png";
import pic3 from "../../images/data/facebook.png";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";


/**
 * @author
 * @function Footer
 **/

const Footer = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  return (
    <div>
      <div className='containerF'>
        <div className='ineternal-1F'>
          <div className='internal-11F'>
            <a className='text-1F' href="/">THE JEWELERY TALE</a>
          </div>
          <div className='internal-12F'>
            <div className='text-2F'>
              Jewelery Tale is an International Trademark creating antique
              jewelery and antique luxury limited edition neckless to provide
              the world with real masterpieces
            </div>
          </div>
          <div className='internal-13F'>
            <a className='text-3F' href="/">thejewelerytale@buisness.com</a>
          </div>

          <div className='internal-14F'>
            <div className='text-4F'>
              GradFord Street, Main Lane, California, U.S.A
            </div>
          </div>
        </div>
        <div className='ineternal-2F'>
          <div className='internal-21F'>
            <div className='help-txtF'>Help</div>
          </div >
          <div className='internal-22F'>
            <div className='linkF'>
              <a className="pgs" href="/">FAQs</a>
            </div>
            <div className='linkF'>
              <a className="pgs" href="/">Delivery Information</a>
            </div>
            <div className='linkF'>
              <a className="pgs" href="/">Return Policy</a>
            </div>
            <div className='linkF'>
              <a className="pgs" href="/account/orders">Orders</a>
            </div>
            <div className='linkF'>
              <a className="pgs" href="/">Make a return</a>
            </div>
          </div>
        </div>
        <div className='ineternal-3F'>
          <div className='internal-31F'>
            <div className='pages-txtF'>Pages</div>
          </div>
          <div className='internal-32F'>
            <div className='linkF'>
              <a className="anc" href='/'>TJT Central</a>
            </div>
            <div className='linkF'>
              <a className="anc" href='/aboutUs'>About Us</a>
            </div>
            <div className='linkF'>
              <a className="anc" href='/'>Social</a>
            </div>
            <div className='linkF'>
              <a className="anc" href='/'>Blog Post</a>
            </div>
          </div>
        </div>
        <div className='ineternal-4F'>
          <div className='internal-41F'>
            <div className='account-txtF'>My Account</div>
          </div>
          <div className='internal-42F'>
            <div className="pgs2" >
              <a className="anc" href='/' onClick={logout}>Logout</a>
            </div>
            <div className="pgs2">
              <a className="anc" href='/'>Register</a>
            </div>
            <div className="pgs2">
              <a className="anc" href='/'>Careers</a>
            </div>
            <div className="pgs2">
              <a className="anc" href='/'>Factory List</a>
            </div>
            <div className="pgs2">
              <a className="anc" href='/'>Explore</a>
            </div>
          </div>
        </div>
        <div className='internal-5F'>
          <div className='image-2F'>
            <a href='/'>
              <img src={pic2} alt='' />
            </a>
          </div>
          <div className='image-3F'>
            <a href='/'>
              <img src={pic3} alt='' />
            </a>
          </div>
          <div className='image-4F'>
            <a href='/'>
              <img src={pic} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
