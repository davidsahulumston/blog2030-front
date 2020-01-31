import React, { Component } from "react";
import Slider from 'react-slick';
import peopleOne from "../../assets/poeple/Screenshot_1.png";
import peopleTwo from "../../assets/poeple/Screenshot_2.png";
import peopleThree from "../../assets/poeple/Screenshot_3.png";


export default class Carrousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    
      <div>
        <Slider {...settings}>
          <div>
            <img src={peopleOne} alt="people" />
          </div>
          <div>
            <img src={peopleTwo} alt="people" />
          </div>
          <div>
            <img src={peopleThree} alt="people" />
          </div>
        </Slider>
      </div>
    );
  }
}
