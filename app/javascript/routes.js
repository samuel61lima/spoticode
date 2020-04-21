import React from "react";

import HomeScreen from "./screens/home";
import DiscoveryScreen from "./screens/discovery";

import { Switch, Route } from 'react-router-dom'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/discovery' component={DiscoveryScreen} />
  </Switch>
);

export default Routes;
