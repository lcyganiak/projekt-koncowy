import React from 'react';
// style 
import './App.scss';

// router
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';

// components Nav
import { Home } from './view/Home/Home';
import { Add } from './view/Add/Add';
import { All } from './view/All/All';

import { Footer } from './components/Footer/Footer';

// componenty składowe

import { Nav } from './components/Nav/Nav';

// iterface 
import { navElements, PathNav } from './HelperInterface/Navigation';

// global Store 

import { GlobalStore } from './Store/GlobalStore'

const App = () => {
  const navigation: navElements[] = [
    {
      path: PathNav.HOME,
      name: 'Home'
    },
    {
      path: PathNav.ALL,
      name: 'All .....'
    },
    {
      path: PathNav.ADD,
      name: "Add..."
    }
  ]

  return (
    <GlobalStore>
      <div className='.app'>

        <Router>
          <Nav navElements={navigation}></Nav>


          <Switch>

            <Route exact path='/all' component={All} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/' component={Home} />
          </Switch>

        </Router>
        <Footer></Footer>
      </div>
    </GlobalStore>
  );
}

export default App;