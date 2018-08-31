import React, { Component } from 'react';

import Routes from './pages/routes.js';

export default () => <Routes />;


/*
export class App extends Component {
  render() {
    return (
      <div>
        {(this.props.location.pathname === '/') ?
            < Home /> :
          (this.props.location.pathname === "/education") ?
            < Education /> :
          (this.props.location.pathname === "/fitness") ?
            < Fitness /> :
          (this.props.location.pathname === "/gaming") ?
            < Gaming /> :
            < Sports />
          //(this.props.location.pathname === "/sports") ?
          //  < Sports /> 
        }
      </div>
    )
  }
}
*/

