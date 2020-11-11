import './App.css';
import Home from './Home'
import Headers from './Header'
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Search from './Search';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
