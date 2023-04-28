import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import { history } from './helpers/history';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Header from "../Header";
import Body from "../Body";
import login from "../Forms/Step2";


// function Authentication(){

//     return(
//         <>
//           <Router history={history}>
//           <Switch>
//                <Route
//                    exact
//                    path="/"
//                    component={Body}
//                />
//                <Route
//                    path="/login"
//                    component={login}
//                />
//                <Redirect to="/" />
//            </Switch>
//           </Router>
//         </>
//     )

// }
// export default Authentication;