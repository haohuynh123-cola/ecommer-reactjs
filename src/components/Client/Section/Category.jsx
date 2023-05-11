import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.scss"
import imgCategory from '../../../assets/img/categories/cat-2.jpg'
function Category(props) {
  const { categories } = props
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <React.Fragment>
      <section className="categories">
        <Slider {...settings}>
          {categories && categories.map(name => {
            return (<>
              <div>
                <img src={imgCategory} alt="" />
                <h5><a href="#">{name}</a></h5>
              </div>
            </>)
          })}
        </Slider>
      </section >
    </React.Fragment >
  );
}

export default Category;