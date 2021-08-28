import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { NavBar } from './components/common/NavBar';
import AdminView from './views/admin/AdminView';
import Footer from './components/common/Footer';
import VaccinationPlace from './views/vaccination/VaccinationPlace';

class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/places/:id" component={VaccinationPlace} />
          <Route exact path="/admin" component={AdminView} />
        </Switch>  
        <Footer />
      </>
    )
  }
}

export default App;
