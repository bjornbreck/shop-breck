import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions';
import Recipe from './Totals';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productQuantity: null
    };
  }

  // remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };

  // add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
    this.setState({
      productQuantity: addQuantity(id)
    });
  };

  // subtract from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
    this.setState({
      productQuantity: subtractQuantity(id)
    });
  };

  render() {
    let addedItems = this.props.items.length ? (
        this.props.items.map(item => {
          console.log('item', item);
          return (
            <li className="product-cart product" key={item.id}>
              <div className="product-img--wrapper">
                <img src={item.img} alt={item.img} className="product-img"/>
              </div>
              <div className="item-desc">
                <h3 className="title">{item.title}</h3>
                <p>{item.desc}</p>
                <p>${item.price}</p>
                <p>
                  <b key={item.quantity}>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <input type="button" value="Add to cart" onClick={()=>{this.handleAddQuantity(item.id)}} />
                  <input type="button" value="Remove from cart" onClick={()=>{this.handleSubtractQuantity(item.id)}} />
                </div>
                <input type="button" onClick={()=>{this.handleRemove(item.id)}} value="Remove"/>
              </div>
            </li>
          )
        })
      ) : (
        <p>Your Cart is Currently Empty.</p>
      );
    return(
      <div className="container">
        <div className="cart">
          <h5>Your Cart:</h5>
          <div className="cart--wrapper">
            <ul className="collection">
              {addedItems}
            </ul>
            <Recipe />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.addedItems,
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart)