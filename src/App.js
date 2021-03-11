//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import SwapComponent from './components/SwapComponent'

function App() {
  return (
    <Router>
        <div>
         <HeaderComponent />
          <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/swap' component={SwapComponent} />
              
          </Switch>
          <FooterComponent />
        </div>
      </Router>
  );
}

export default App;