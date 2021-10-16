// import logo from './logo.svg';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
