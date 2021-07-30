import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cuenta } from './components/autentificacion/Cuenta';
import { Login } from './components/autentificacion/Login';
import { Proyectos } from './components/proyectos/Proyectos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Login} />
        <Route exact path = "/cuenta" component = {Cuenta} />
        <Route exact path = "/proyectos" component = {Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
