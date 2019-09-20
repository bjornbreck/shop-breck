import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartIcon from './ShoppingCart';
import Cart from "./Cart";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: 0,
      active: false
    };
  }
  
  toggleCart() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    const totalProducts = this.props.addedItems.reduce(function(prev, cur) {
      return prev + cur.quantity;
    }, 0);

    return (
      <header className={`main-nav ${this.state.active ? 'open': ''}`} >
        <div className="cart--header">
          <h2>{totalProducts}</h2>
          <div className="cart-btn" onClick={()=>{this.toggleCart()}}>
            <CartIcon />
          </div>
        </div>
        { this.state.active === true ? <Cart /> : null }
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
};

export default connect(mapStateToProps)(Nav);