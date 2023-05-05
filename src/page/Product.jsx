import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import image from '../assets/img/product/product-1.jpg'
function Product(props) {
  return (
    <React.Fragment>
      <Breadcrumb></Breadcrumb>
      <section class="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div class="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                    <li><a href="#">Fresh Berries</a></li>
                    <li><a href="#">Ocean Foods</a></li>
                    <li><a href="#">Butter &amp; Eggs</a></li>
                    <li><a href="#">Fastfood</a></li>
                    <li><a href="#">Fresh Onion</a></li>
                    <li><a href="#">Papayaya &amp; Crisps</a></li>
                    <li><a href="#">Oatmeal</a></li>
                  </ul>
                </div>
                <div class="sidebar__item">
                  <h4>Price</h4>
                  <div class="price-range-wrap">
                    <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
                      <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "0%" }}></span>
                      <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%;" }}></span>
                      <div class="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0%", width: "100%" }}></div></div>
                    <div class="range-slider">
                      <div class="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__item sidebar__item__color--option">
                    <h4>Colors</h4>
                    <div class="sidebar__item__color sidebar__item__color--white">
                      <label for="white">
                        White
                        <input type="radio" id="white" />
                      </label>
                    </div>
                    <div class="sidebar__item__color sidebar__item__color--gray">
                      <label for="gray">
                        Gray
                        <input type="radio" id="gray" />
                      </label>
                    </div>
                    <div class="sidebar__item__color sidebar__item__color--red">
                      <label for="red">
                        Red
                        <input type="radio" id="red" />
                      </label>
                    </div>
                    <div class="sidebar__item__color sidebar__item__color--black">
                      <label for="black">
                        Black
                        <input type="radio" id="black" />
                      </label>
                    </div>
                    <div class="sidebar__item__color sidebar__item__color--blue">
                      <label for="blue">
                        Blue
                        <input type="radio" id="blue" />
                      </label>
                    </div>
                    <div class="sidebar__item__color sidebar__item__color--green">
                      <label for="green">
                        Green
                        <input type="radio" id="green" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div class="product__discount">
                <div class="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="product__discount__item">
                      <div class="product__discount__item__pic set-bg" data-setbg={image} style={{ backgroundImage: `url(${image})` }}>
                        <div class="product__discount__percent">-20%</div>
                        <ul class="product__item__pic__hover">
                          <li><a href="#"><i class="fa fa-heart"></i></a></li>
                          <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                      </div>
                      <div class="product__discount__item__text">
                        <span>Dried Fruit</span>
                        <h5><a href="#">Raisin’n’nuts</a></h5>
                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product discount */}
              <div class="filter__item">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="filter__sort">
                      <span>Sort By</span>
                      <select style={{ display: "none" }}>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select><div class="nice-select" tabindex="0"><span class="current">Default</span><ul class="list"><li data-value="0" class="option selected">Default</li><li data-value="0" class="option">Default</li></ul></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* product list */}
              <div className="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: `url(${image})` }}>
                      <ul class="product__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                      </ul>
                    </div>
                    <div class="product__item__text">
                      <h6><a href="#">Crab Pool Security</a></h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment >
  );
}

export default Product;
