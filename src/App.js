import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";




const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/login" exact component={ Login }/>
          </Switch>
        </BrowserRouter>
    );
};

export default App;

// https://react-slick.neostack.com/   <=== carousel for react