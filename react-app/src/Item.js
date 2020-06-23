import React,{useState,useEffect} from 'react';

import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import Jumbotron from "react-bootstrap/Jumbotron"
function ItemDetail({match}){
    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);
    // 
    const [item,setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://127.0.0.1:8000/webapp/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item)
         ;
    }
    return(
      <div className = "item">
      <h1 className = "heading" > Institute Technical Summer Project</h1>
      <h2 className = "heading" style= {{paddingTop : "0px"}} > Details </h2>
      <Image src = "https://dummyimage.com/480x4:3" className = "image" />
      <h1 className = "team">Team <Badge variant="secondary">{item.team_name} </Badge> </h1>
      <Card style={{ width: '18rem' }} className = "card">
      <Card.Header>Team Members</Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item>{item.team_member_1} </ListGroup.Item>
      <ListGroup.Item>{item.team_member_2} </ListGroup.Item>
      <ListGroup.Item>{item.team_member_3} </ListGroup.Item>
      <ListGroup.Item>{item.team_member_4} </ListGroup.Item>
      </ListGroup>
      </Card>
      <Jumbotron>
  <h1>About the Project</h1>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
   </Jumbotron>
      </div>      
    )


    
}

export default ItemDetail;

