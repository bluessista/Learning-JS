import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="robberyFrame">
        <div className="panel">
          Moin World
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}

ReactDOM.render(< App />, document.querySelector('#app'));
