import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Details from '../pages/Details'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Details} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
