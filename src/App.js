import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './landing/pages/home';
import Auth from './users/pages/Auth';
import Doctors from './landing/pages/doctor';
import PatientsProfile from './landing/pages/patients_profile';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/components/hooks/auth-hook';

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/patients_profile"> <PatientsProfile /> </Route>
        <Route path="/doctors"> <Doctors /> </Route>
        <Redirect to="/doctors" />
      </Switch>
    );
  } 
  else {
    routes = (
      <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/auth"> <Auth /> </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
          <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
