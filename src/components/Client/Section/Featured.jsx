import React from 'react';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actions/action';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';
function Featured(props) {
  const { products } = props
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    item['qty'] = 1
    dispatch(addToCart(item));
    toast.success("Add to cart success")
  }
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
            {products && products.length > 0 && products.map((item, index) => {
              return (<>
                <LazyLoadComponent>
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                      <div className="featured__item__pic set-bg">
                        <LazyLoadImage src={item.image} alt={item.alt} effect="blur" />
                        <ul className="featured__item__pic__hover">
                          <li><a href="#"><i className="fa fa-heart"></i></a></li>
                          <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                          <li><a onClick={() => handleAddToCart(item)}><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6><Link to={`/product/${item.id}`}>{item.title}</Link></h6>
                        <h5>${item.price}</h5>
                      </div>
                    </div>
                  </div>
                </LazyLoadComponent >
              </>)
            })}

          </div>
        </div>
      </section>
    </React.Fragment >
  );
}

export default Featured;