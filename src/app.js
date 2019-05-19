import React from 'react';
import Header from './views/layout/header';
import Body from './views/layout/body';
import Footer from './views/layout/footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>)
  }
}

export default App;