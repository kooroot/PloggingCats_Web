import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/slide/slide_image_1.png";
import img2 from "../images/slide/slide_image_2.png";
import img3 from "../images/slide/slide_image_3.png";
import img4 from "../images/slide/slide_image_4.png";
import img5 from "../images/slide/slide_image_5.png";

export default class CenterMode extends Component {
  render() {
    const baseUrl = [
      {image: img1},
      {image: img2},
      {image: img3},
      {image: img4},
      {image: img5},
    ];
    const settings = {
      customPaging: function(i) {
        return (
          <div className="paging_item">
            <img className="paging_image" src={`${baseUrl[i].image}`} />
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    const slideCustom = (idx) => {
      return (
        <div className="item_wrap">
          <div className="slide_item">
            <div className="slide_text">{baseUrl[idx].title}</div>
            <img className="slide_iamge" src={baseUrl[idx].image} />
          </div>
        </div>
      );
    };
    return (<>
        <div className="slide_title">
          {/* 일단 여기까지 작업 */}
          {/* <img src="../" alt=""> */}
        </div>
        <div className="slide_wrapper">
          <Slider {...settings}>
          {slideCustom(0)}
          {slideCustom(1)}
          {slideCustom(2)}
          {slideCustom(3)}
          {slideCustom(4)}
          </Slider>
        </div>
      </>
    );
  }
}