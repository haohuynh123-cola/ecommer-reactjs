import React from 'react';
// import image from '../../assets/img/breadcrumb.jpg'
import image from '../../assets/img/breadcrumb.jpg'
import { NavLink } from 'react-router-dom';

function Breadcrumb(props) {
  return (
    <div>
      <section className="breadcrumb-section set-bg" data-setbg={image} style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <NavLink to="/">Shop</NavLink>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Breadcrumb;