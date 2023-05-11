import { useReducer } from "react";

const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };

  return {
    cart,
    addToCart
  };
};

export default useCart;