import React from 'react';

import MyComponent from '../src/index';
class Example extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {}

  render() {
    return (
      <div>
        <MyComponent name='Jack' image={"http://www.tompetty.com/sites/g/files/g2000007521/f/sample001.jpg"}/>
      </div>
    );
  }
}

export default Example;
