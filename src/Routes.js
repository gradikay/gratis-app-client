// This file is exported to src/App.js
// React required
import React from "react";
import { Route, Switch } from "react-router-dom";
// Containers - Pages
import Home from "./containers/Home";  
import Login from "./containers/Login";   
import PostNew from "./containers/PostNew";
import PostView from "./containers/PostView"; 
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";    
import PostEdit from "./containers/PostEdit";
import Dashboard from "./containers/Dashboard";
import ResetPassword from "./containers/ResetPassword"; 
import SignupConfirmation from "./containers/SignupConfirmation";
// Components
import AppliedRoute from "./components/AppliedRoute"; 
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Routes({ appProps }) {
    return (
        <Switch>

            { /* AppliedRoute - Public & Private accessible links - Start */ }
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/view/:id" component={PostView} appProps={appProps} />      
            { /* AppliedRoute - Public & Private accessible links - End */ }

            { /* AppliedRoute - Public (Not logged In User) only links - Start */ }
            <AppliedRoute path="/login" component={Login} />
            <AppliedRoute path="/register" component={Register} />
            <AppliedRoute path="/reset" component={ResetPassword} />
            <AppliedRoute path="/confirmation" component={SignupConfirmation} />
            { /* AppliedRoute - Public (Not logged In User) only links - End */ }

            { /* AppliedRoute - Private (logged In User) only links - Start */ } 
            <AppliedRoute path="/postnew" component={PostNew} />
            <AppliedRoute path="/dashboard" component={Dashboard} />
            <AppliedRoute path="/postedit/:id" component={PostEdit} /> 
            { /* AppliedRoute - Private (logged In User) only links - End */ }

            { /* 404 Page - Start */ }
            <Route component={NotFound} />
            { /* 404 Page - End */}

        </Switch>
    );
}