import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import {eventCard} from "./eventCard";
import  Card  from "react-bootstrap";
import  Col  from "react-bootstrap";
function App() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"));

  const client = new ApiClient(
    token,
    () => logout()
  );

  const login = (newToken) => {
    window.localStorage.setItem("token",newToken);
    changeToken(newToken);
  }
  
  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  }

  return (
    <>
      {token ? (
        <Dashboard client={client} />
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} />
      )

      }
      
    </>
  );
}

buildCards();{
  return this.state.event.map((current, i) => (
    <Col key={i} lg>
      <Card>
        <eventCard text={current.name} location={current.location} summary={current.summary} date={current.date} time={current.timeofevent}/>
      </Card>
    </Col>
  ))
  }

export default App;
