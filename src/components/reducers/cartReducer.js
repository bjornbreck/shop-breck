import BoloTie from '../../images/bolo-tie.jpg'
import Chukkas from '../../images/chukkas.jpeg'
import Hat from '../../images/hat.png'
import Jacket from '../../images/jacket.jpg'
import Tshirt from '../../images/tshirt.jpg'
import RyeWhiskey from '../../images/knob-creek-rye.png'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/action-types/cart-actions'


const initState = {
  items: [
    {id: 1, title: 'Bolo Tie', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 110, img: BoloTie},
    {id: 2, title: 'Chukkas', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 80, img: Chukkas},
    {id: 3, title: 'Hat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 120, img: Hat},
    {id: 4, title: 'Jacket', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 260, img: Jacket},
    {id: 5, title: 'Tshirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 160, img: Tshirt},
    {id: 6, title: 'Rye Whiskey', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 90, img: RyeWhiskey}
  ],
  addedItems:[],
  total: 0
};

const cartReducer = (state = initState, action) => {

  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item= state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;

      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1;

      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total : newTotal
      }

    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove= state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if (action.type === ADD_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    }
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item =>item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return{
        ...state,
        total: newTotal
      }
    }

  }

  else {
    return state
  }

};

export default cartReducer