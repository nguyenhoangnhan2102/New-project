import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav';
// import {
//   BrowserRoute,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom"


function App() {
  return (
    // <BrowserRoute>
    <div className="App">
      <Nav />
      <header className="App-header">

        {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
      </header>
    </div>
    // </BrowserRoute>
  );
}

export default App;
