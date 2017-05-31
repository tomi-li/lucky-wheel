/**
 * All Codes below are Lifetime Warranted by mozat-tomi since 31/5/17.
 */

import React from 'react';
import Footer from './components/footer';
import Wheel from './components/wheel';

class App extends React.Component {

  state = {
    data: [123, 123, 321],
  };

  render() {

    const listItem = this.state.data.map((each, index) => <li key={index}>{each}</li>);
    const list = <ul>{listItem}</ul>;

    return (
      <div>
        <Wheel/>
        {list}
        <Footer/>
      </div>
    )
  }
}

export default App;