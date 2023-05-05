import React from 'react';
import image from '../assets/img/breadcrumb.jpg'
import { NavLink } from 'react-router-dom';

function Breadcrumb(props) {
  return (
    <div>
      <section class="breadcrumb-section set-bg" data-setbg={image} style={{ backgroundImage: `url(${image})` }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
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