import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Campaign_01 from '../images/campaign/campaign_01.png';
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
        <div className="slide_wrapper">
        <div className="slide_title">
          <img src={Campaign_01} alt="" />
          <p>캐치와 플로깅캣츠가 처음으로 구할 멸종위기동물은 해달
              보노(BONO)에요!
              <br />
              해안가에 살며 평화롭게 멱을 감고 조개를 잡아먹고 사는 보노는
              <br />
              밀려오는 해양 쓰레기와 유출된 기름, 폐그물에 걸려 매일매일 목숨이
              위태로워요
              <br />
              우리 빨리 불쌍한 해달 보노를 구출해 줍시다!</p>
        </div>
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