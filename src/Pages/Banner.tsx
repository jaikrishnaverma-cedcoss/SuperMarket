import React, { Component } from "react";
import Slider from "react-slick";
import { database } from "../database";
export default class Banner extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      autoplaySpeed: 1500,
      afterChange: function(index:number) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
    <div className="col-12 bg-light targeted-scrollbox">
        <Slider {...settings}>
        {
            database.banner.map(x=><div className=""><img className='m-1' style={{width:'332px',height:'332px'}} src={x} alt="" /></div> )
        }
        </Slider>
      </div>
    );
  }
}