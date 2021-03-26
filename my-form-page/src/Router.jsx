import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Login from "./components/login/login";
import WikiInfo from "./components/info/info";
import MainPage from "./components/main-page/main-page";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/main" exact>
                <MainPage />
            </Route> <Route path="/info" exact>
                <WikiInfo />
            </Route> 
            <Redirect to="/" />
        </Switch>
    )
}

export default AppRouter;