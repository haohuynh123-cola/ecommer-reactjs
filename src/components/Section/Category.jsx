import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.scss"
import imgCategory from '../../assets/img/categories/cat-2.jpg'
function Category(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <React.Fragment>
      <section class="categories">
        <Slider {...settings}>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
          <div>
            <img src={imgCategory} alt="" />
            <h5><a href="#">Dried Fruit</a></h5>
          </div>
        </Slider>
      </section >

    </React.Fragment >
  );
}

export default Category;