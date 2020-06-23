import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"

function Introduction(){
    return(
        <Jumbotron>
        <h1 className = "heading" style = {{paddingTop : "20px"}}>Welcome!</h1>
        <p className = "about">
        This is a simple React.js with Django REST API web application to display information of ITSP teams in IIT Bombay.
        React.JS handles the frontend and Django handles the backend.
        </p>
      </Jumbotron>
    )
}

export default Introduction;