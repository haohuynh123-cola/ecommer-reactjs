import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, updateQuantity } from '../../store/actions/action';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cart = (props) => {
  const items = useSelector(state => state.cartItems)
  const totalPrice = useSelector(state => state.totalPrice)

  console.log(items)
  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  }

  const hanldeIncQuanlity = (id, qty) => {
    dispatch(updateQuantity(id, qty + 1))
  }
  return (
    <>
      <section class="shoping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th class="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items && items.length > 0 && items.map((item, index) => {
                      return (<>
                        <tr>
                          <td class="shoping__cart__item">
                            <LazyLoadImage src={item.image} alt="" width={50} />
                            <h5>{item.title}</h5>
                          </td>
                          <td class="shoping__cart__price">
                            ${item.price}
                          </td>
                          <td class="shoping__cart__quantity">
                            <div class="quantity">
                              <div class="pro-qty">
                                <span class="dec qtybtn">-</span>
                                <input type="text" value={item.qty} />
                                <span class="inc qtybtn" onClick={() => hanldeIncQuanlity(item.id, item.qty)}>+</span>
                              </div>
                            </div>
                          </td>
                          <td class="shoping__cart__total">
                            ${item.price * item.qty}
                          </td>
                          <td class="shoping__cart__item__close">
                            <span class="icon_close" onClick={() => handleDeleteItem(item)}></span>
                          </td>
                        </tr></>)
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="shoping__continue">
                <div class="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" class="site-btn">APPLY COUPON</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>${totalPrice}</span></li>
                  <li>Total <span>${totalPrice}</span></li>
                </ul>
                <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;