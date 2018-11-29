import React, { Component } from 'react';
import headerz from './components/header/header';
import './style/foundation.min.css'

class App extends Component {
  render() {
    return (
      
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        
        <div className="off-canvas-content" data-off-canvas-content>
          <div className="title-bar hide-for-large">
            <div className="title-bar-left">
              <button className="menu-icon" type="button" data-open="my-info"></button>
              <span className="title-bar-title">Mike Mikerson</span>
            </div>
          </div>

          <headerz />

          <div className="row small-up-2 medium-up-3 large-up-4">
            <div className="column">
              <img className="thumbnail" src="https://placehold.it/550x550" />
              <h5>My Site</h5>
            </div>
            </div>

          <hr />

          <div className="row">
            <div className="medium-12 columns">
              <h3>Contact Me</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default App;
