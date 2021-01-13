import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';


import LandingPage from "./components/landingPage.component";
import ImageDetail from "./components/imageDetail.component";
import AppContextProvider from "./components/appContext"


function App() {

  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route 
            exact 
            path='/' 
            component = {LandingPage}
          />
          <Route 
            exact 
            path='/detail'
            component = {ImageDetail}
          />
        </Switch>
      </AppContextProvider>
    </Router>

  );
}

export default App;
