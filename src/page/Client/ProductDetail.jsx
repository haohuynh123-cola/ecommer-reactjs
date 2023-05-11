import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getAProduct } from '../../service/product';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../store/actions/action';

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const { productId } = useParams();
  const [quantily, setQuantily] = useState(1);

  const dispatch = useDispatch();

  function handleAddToCart(item) {
    item['qty'] = quantily
    dispatch(addToCart(item));
    toast.success("Add to cart success")
  }
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await getAProduct(productId)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleClickIncQuanlity = () => {
    setQuantily(quantily => quantily + 1)
  }

  const handleClickDecQuanlity = () => {
    setQuantily(quantily => quantily - 1)
  }

  const hanldeOnChangeQuanlity = () => {
    setQuantily(quantily => quantily - 1)
  }
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <section class="product-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="product__details__pic">
                <div class="product__details__pic__item">
                  <img class="product__details__pic__item--large" src={product.image} alt="" height={480} />
                </div>
                <div class="product__details__pic__slider owl-carousel owl-loaded owl-drag">
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="product__details__text">
                <h3>{product.title}</h3>
                <div class="product__details__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                  <span>({product && product.rating && product.rating.count} reviews)</span>
                </div>
                <div class="product__details__price">${product.price}</div>
                <p>{product.description}</p>
                <div class="product__details__quantity">
                  <div class="quantity">
                    <div class="pro-qty">
                      <span class="dec qtybtn" onClick={() => handleClickDecQuanlity()}>-</span>
                      <input type="text" value={quantily} />
                      <span class="inc qtybtn" onClick={() => handleClickIncQuanlity()}>+</span></div>
                  </div>
                </div>
                <p class="primary-btn" onClick={() => handleAddToCart(product)}>ADD TO CARD</p>
                <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                <ul>
                  <li><b>Availability</b> <span>In Stock</span></li>
                  <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                  <li><b>Weight</b> <span>0.5 kg</span></li>
                  <li><b>Share on</b>
                    <div class="share">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="product__details__tab">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tabs-1" role="tabpanel">
                    <div class="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {product.description}
                    </div>
                  </div>
                  <div class="tab-pane" id="tabs-2" role="tabpanel">
                    <div class="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {product.description}
                    </div>
                  </div>
                  <div class="tab-pane" id="tabs-3" role="tabpanel">
                    <div class="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="related-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="product__item">
                {/* //style="background-image: url(&quot;img/product/product-1.jpg&quot;);" */}
                <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: `url(${product.image})` }} >
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
        </div>
      </section>
    </>
  );
};

export default ProductDetail;