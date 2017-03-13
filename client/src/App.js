import React from 'react';


import Header from './components/header/header';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
      <Header />
      {this.props.children}
      </div>
    );
  }
}

export default App;
