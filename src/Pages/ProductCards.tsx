import React, { Component } from "react";
import Slider from "react-slick";
import { database } from "../database";

export default class ProductCards extends Component {
  render() {
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  autoplay: true,
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
  speed: 500,
  autoplaySpeed: 1500,
  afterChange: function(index:number) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};
return (
<div className="col-12 bg-light targeted-scrollbox mt-3 px-3">
    <h4 className="m-2 ps-2">SPAR DAY</h4>
    <Slider {...settings}>
    {
        database.products.map((x,i)=>
            <div>
                <div className="card m-2" style={{}}>
                 <label className="label-danger">3% off</label> 
            <img style={{width:'200px',marginLeft:'auto',marginRight:'auto'}}src={x.image} className="card-img-top" alt="..."/>
            <div className="card-body ">
              <p className="card-title text-secondary border border-bottom-0 border-start-0 border-end-0 pt-2">{x.title}</p>
            </div>
            <ul className="list-group list-group-flush border-0">
              <li className="list-group-item border-0 py-0">&nbsp;</li>
              <li className="list-group-item border-0 py-0"><p className="fs-6 m-0 bolder">₹ {x.price*10}</p></li>
              <li className="list-group-item border-0 py-0"><p className="fs-7 m-0 bolder text-secondary text-decoration-line-through">MRP ₹ {x.price*10+100}</p></li>
            </ul>
            <div className="card-body">
             <button className="btn btn-success rounded-0 col-12"><i className="bi bi-cart3 mx-2"></i>ADD TO CART</button>
            </div>
          </div>
            </div>
            )
    }
    </Slider>
  </div>
);
  }
}