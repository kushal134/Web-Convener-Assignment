import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
function About(){
    return(
<Jumbotron >
  <h1 className = "heading" style = {{paddingTop : "20px"}}> About </h1>
  <div className = "about">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  
</Jumbotron>
    )
}

export default About;