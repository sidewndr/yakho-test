import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from "../pages/home/homePage";
import {TeamPage} from "../pages/team/teamPage";

export const Routes = () => {
  return (
    <BrowserRouter>

        <Switch>
          <Route
            exact
            path={'/'}
            component={HomePage}
          />

          <Route
            exact
            path={'/:team'}
            component={TeamPage}
          />
        </Switch>

    </BrowserRouter>
  )
}