import React from 'react';
import image from '../../assets/img/featured/feature-1.jpg'
function Featured(props) {
  return (
    <React.Fragment>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active mixitup-control-active" data-filter="*">All</li>
                  <li data-filter=".oranges" className="">Oranges</li>
                  <li data-filter=".fresh-meat" className="">Fresh Meat</li>
                  <li data-filter=".vegetables" className="">Vegetables</li>
                  <li data-filter=".fastfood" className="">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter" id="MixItUp317AA2" >
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" >
              <div className="featured__item">
                <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${image})` }} >
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${image})` }}>
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Crab Pool Security</a></h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Featured;