import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppContent from './AppContent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    );
  }
}

export default App;
