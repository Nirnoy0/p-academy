import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services"> 
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
