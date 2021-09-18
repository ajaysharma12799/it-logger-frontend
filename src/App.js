import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddLogForm from './components/logs/AddLogForm';
import UpdateLogForm from './components/logs/UpdateLogForm';
import Home from './components/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTechForm from './components/techs/AddTechForm';
import UpdateTechForm from './components/techs/UpdateTechForm';
import AllTech from './components/techs/AllTech';
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AddLog" exact component={AddLogForm} />
          <Route path="/UpdateLog" exact component={UpdateLogForm} />
          <Route path="/AddTech" exact component={AddTechForm} />
          <Route path="/UpdateTech" exact component={UpdateTechForm} />
          <Route path="/SeeTechnicians" exact component={AllTech} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App