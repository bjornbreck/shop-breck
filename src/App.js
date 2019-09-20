import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Nav from './components/Nav';
import Home  from './components/Products';
import EmptyMessage from './components/EmptyMessage';
import cartReducer from './components/reducers/cartReducer';
import './Shop.scss';

const store = createStore(cartReducer);

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .then(data => (console.log(data)))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <EmptyMessage />
          <Nav />
          <Home />
          <p className="App-intro">{this.state.data}</p>
        </div>
      </Provider>
    )
  }
}

export default App;
