import React from 'react';
import '../styles/App.css';
import {Header} from "./Header";
import {NavBar} from "../components/NavBar";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import {MainPage} from "./MainPage";
import {Products} from "./Products";
import {Contacts} from "./Contacts";
import {Footer} from "../components/Footer";
import {Cart} from "../components/Cart";
import {RegistrationComponent} from "../components/RegistrationComponent";
import NotFoundPage from "../components/NotFoundPage";

function App() {
  return (
      <div className="App">
          <Header/>
          <NavBar />
          <main>
              <BrowserRouter>
                  <Switch>
                      <Route exact path={"/"} component={MainPage}/>
                      <Route path={"/products/"} component={Products}/>
                      <Route exact path={"/contacts/"} component={Contacts}/>
                      <Route exact path={"/cart/"} component={Cart}/>
                      <Route exact path={"/registration/"} component={RegistrationComponent}/>
                      <Route component={NotFoundPage}/>
                  </Switch>
              </BrowserRouter>
          </main>
          <Footer />
      </div>
  );
}

export default App;
