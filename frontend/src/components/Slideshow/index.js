import React,{Component} from 'react'
import "./style.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rightarrow from "../../images/data/right-arrow.png"
import leftarrow from "../../images/data/left-arrow.png"
import picMain from "../../images/data/mainSlide.png"
import OO1 from "../../images/data/001.png"
import OO2 from "../../images/data/002.png"
import bcTg from "../../images/data/BackgroundTagline.png"
import picMain2 from "../../images/data/Bachi2.png"
import group30 from "../../images/data/Group30.png"
import group31 from "../../images/data/Group31.png"
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <button
          className="arrow-btn prev">
          <img src={leftarrow} onClick={() => this.slider.slickPrev()}
          alt=''></img>
        </button>
        <button
          className="arrow-btn next">
          <img src={rightarrow} onClick={() => this.slider.slickNext()} 
          alt=''></img>
        </button>
      </div>
    );
  };

  render() {
    const settings = {
      // autoplaySpeed:1000,
      // autoplay:true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // lazyLoad: true,
      easing:'linear',
      pauseOnFocus:true,
      arrows:false,
    };
    return (
      <div className="sliderBody">
        {this.renderArrows()}
        <Slider {...settings } ref={c => (this.slider = c)}>
          <div className="slider">
            <div className="slide" >
              <img src={OO1} alt="main_picture" className='OO1'/>
              <img src={bcTg} alt="main_picture" className='bcTg'/>
              <img src={picMain} alt="main_picture" className='picMain'/>
              <div className="data">
                <h2>PEARL NECKLACES</h2>
              </div>
              <div>
                <img src={group30} alt="description" className='group30'/>
              </div>
              <div className='btn'>
                <button >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="slide" >
              <img src={OO2} alt="main_picture" className='OO1'/>
              <img src={bcTg} alt="main_picture" className='bcTg'/>
              <img src={picMain2} alt="main_picture" className='picMain'/>
              <div className="data">
                <h2>GOLD NECKLACES</h2>
              </div>
              <div>
                <img src={group31} alt="description" className='group30'/>
              </div>
              <div className='btn'>
                <button >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}