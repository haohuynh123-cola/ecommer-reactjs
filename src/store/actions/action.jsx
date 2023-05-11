import ActionTypes from "./ActionTypes";

export const addToCart = (payload) => {
  return { type: ActionTypes.ADD_TO_CART, payload };
}


export const deleteItem = (payload) => {
  return { type: ActionTypes.DELETE_ITEM_CART, payload };
}

export const updateQuantity = (id, qty) => {
  return {
    type: ActionTypes.UPDATE_QUALITY_ITEM,
    payload: {
      id,
      qty
    }
  };
};