import React from 'react';
import Header from './views/layout/header';
import Body from './views/layout/body';
import './style/layout/common.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>)
  }
}

export default App;
