import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import styled  from "styled-components";

import Home from '../src/pages/Home';
import Pillars from "../src/pages/FivePillars";
import Salah from "../src/pages/Salah";
import Wudu from "../src/pages/Wudu";

const Section = styled.section`
  overflow: hidden;
`;

function App() {

  let location = useLocation();

  return (
    <Section>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Pillars} />
          <Route path="/services" component={Salah} />
          <Route path="/services" component={Wudu} />
        </Switch>
      </AnimatePresence>
  </Section>
  );
}

export default App;
