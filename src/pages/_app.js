import React from "react";
import IndexPage from "./index";
import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";
import { ThemeProvider } from "./../util/theme.js";

function App(props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={IndexPage} />

              <Route exact path="/pricing" component={PricingPage} />

              <Route exact path="/dashboard" component={DashboardPage} />

              <Route exact path="/settings/:section" component={SettingsPage} />

              <Route exact path="/purchase/:plan" component={PurchasePage} />

              <Route exact path="/auth/:type" component={IndexPage} />

              <Route
                exact
                path="/firebase-action"
                component={FirebaseActionPage}
              />

              <Route component={NotFoundPage} />
            </Switch>
          </>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
