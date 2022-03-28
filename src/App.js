import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Shared/Header';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import ManageService from './Components/ManageService/ManageService';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/manageService">
                <ManageService></ManageService>
              </Route>
              <Route path="/addService">
                <AddService></AddService>
              </Route>
              
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            
            <Route path="/login"><Login>
              </Login>
              </Route>

              
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;