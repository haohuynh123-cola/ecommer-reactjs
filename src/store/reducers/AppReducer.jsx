import ActionTypes from "../actions/ActionTypes";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

function AppReducer(state = initialState, action) {
  switch (action.type) {
    // case ActionTypes.ADD_TO_CART:
    //   const newItem = action.payload;
    //   newItem.quantity = 1;
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, newItem],
    //     total: state.total + newItem.price
    //   };
    case ActionTypes.ADD_TO_CART:
      const { payload } = action;
      const item = state.cartItems.find(
        product => product.id === payload.id,
      );

      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.id === payload.id
            ? {
              ...item,
              qty: item.qty + payload.qty,
            }
            : item
          ),
          totalPrice: state.totalPrice + payload.price * payload.qty,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        totalPrice: state.totalPrice + payload.price * payload.qty,
      };

    case ActionTypes.UPDATE_QUALITY_ITEM:
      const { id, qty } = action.payload;
      const updatedItems = state.cartItems.map(item => {
        if (item.id === id) {
          item.quantity = qty;
        }
        return item;
      });
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotal
      };
    case ActionTypes.DELETE_ITEM_CART:
      let itemCartNew = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      let priceTemp = 0
      itemCartNew.map((item, index) => priceTemp += item.price);
      return {
        ...state,
        cartItems: itemCartNew,
        totalPrice: priceTemp
      };
    default:
      return state;
  }
}

export default AppReducer