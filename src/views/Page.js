import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Langage from './Langage';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>

      <div>
              <h3 class="float-md-start mb-0">Language</h3>
              <nav class="nav nav-masthead justify-content-center float-md-end">
              <Link   class="nav-link active" to="/">Home</Link>
              <Link   class="nav-link active" to="/contact">contact</Link>
              </nav>
            </div>
      <div>

      


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Langage change />

    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Langage />

    </div>
  );
}

