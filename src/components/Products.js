import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class Products extends Component {

  handleClick = (id)=> {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="product-shop product" key={item.id}>
          <div className="product-img--wrapper">
            <img src={item.img} alt={item.title} className="product-img" />
            <h3 className="product-title">{item.title}</h3>
            <input type="button" value="Add to Cart" className="btn btn--product-add" onClick={()=>{this.handleClick(item.id)}} />
          </div>

          <div className="product-content">
            <p>{item.desc}</p>
            <p>${item.price}</p>
          </div>
        </div>

      )
    });

    return (
      <div className="products">
        <h3 className="products--title">Uncommon Common Goods</h3>
        <div className="products--wrapper">
          {itemList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

const mapDispatchToProps= (dispatch) => {
  return{
    addToCart: (id) => {dispatch(addToCart(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)