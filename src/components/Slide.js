import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import img1 from "../images/slide/slide_image_1.png";
import img2 from "../images/slide/slide_image_2.png";
import img3 from "../images/slide/slide_image_3.png";
import img4 from "../images/slide/slide_image_4.png";
import img5 from "../images/slide/slide_image_5.png";

export default class CenterMode extends Component {
  render() {
    const baseUrl = [
      {image: img1, text: "멸종위기 동물 | 해달1", title:"1. 내용을 적어주세요. 여기에 들어갈..."},
      {image: img2, text: "멸종위기 동물 | 해달2", title:"2. 내용을 적어주세요. 여기에 들어갈..."},
      {image: img3, text: "멸종위기 동물 | 해달3", title:"3. 내용을 적어주세요. 여기에 들어갈..."},
      {image: img4, text: "멸종위기 동물 | 해달4", title:"4. 내용을 적어주세요. 여기에 들어갈..."},
      {image: img5, text: "멸종위기 동물 | 해달5", title:"5. 내용을 적어주세요. 여기에 들어갈..."},
    ];
    const settings = {
      customPaging: function(i) {
        return (
          <div className="paging_item">
            <img className="paging_image" src={`${baseUrl[i].image}`} />
            <div className="paging_text">{`${baseUrl[i].text}`}</div>
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
    return (
      <div className="slide_wrapper">
        <Slider {...settings}>
        {slideCustom(0)}
        {slideCustom(1)}
        {slideCustom(2)}
        {slideCustom(3)}
        {slideCustom(4)}
        </Slider>
      </div>
    );
  }
}