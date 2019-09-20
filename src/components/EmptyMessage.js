import React, { Component } from 'react';

class EmptyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true
    };
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({showMessage: false})
    }, 1500);
    return () => clearTimeout(timer);
  }

  render() {
    return (

      <div>
        { this.state.showMessage === true ? <div className="empty-message">Your Cart is Empty</div> : null }
      </div>
    )
  }
};

export default EmptyMessage;