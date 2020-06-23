import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup"
import Introduction from "./Introduction"
import "bootstrap/dist/css/bootstrap.min.css"

class home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : [],
    }
    this.fetchTasks = this.fetchTasks.bind(this)
  }

  componentWillMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    fetch("http://127.0.0.1:8000/webapp/all")
    .then(response => response.json())
    .then(data => 
    this.setState({
      list : data
    })
      )
  }
  render(){

    return(
      <div>
      <Introduction />
      <h1 className="heading" style = {{paddingTop: "0px"}}>ITSP Teams</h1>
      <ListGroup variant = "flush">
      {this.state.list.map(function(item,index){
        return(
          <ListGroup.Item key = {index} style = {{textAlign : "center" , fontSize : "1.5rem"}} variant = "primary">
          <Link to = {`/${item.team_id}`} > {item.team_name} </Link>
          </ListGroup.Item>
        )
      }
      )
    }
    </ListGroup>
    </div>
    )
  }
}

export default home;
