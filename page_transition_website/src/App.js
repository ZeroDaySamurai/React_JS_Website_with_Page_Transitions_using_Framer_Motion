import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
