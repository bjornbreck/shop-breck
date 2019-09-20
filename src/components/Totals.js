import React, { Component } from 'react'
import { connect } from 'react-redux'

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: 0
    };
  }

  render() {
    const totalProducts = this.props.addedItems.reduce(function(prev, cur) {
      return prev + cur.quantity;
    }, 0);

    return (
      <div className="shopping-cart--wrapper">
        <ul className="shopping-cart--total">
          <li className="shopping-cart">
            <span>Total:</span>
            <span>${this.props.total}</span>
          </li>
          <li>
            <span>Quantity:</span>
            <span>{totalProducts}</span>
          </li>
        </ul>
        <div className="checkout">
          <input type="button" className="btn" value="Checkout" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
};

export default connect(mapStateToProps)(Totals);