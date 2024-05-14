import logo from './logo.svg';
import './App.css';
import { useState }from 'react'
import { Button, Card }from 'react-bootstrap'
function App() {
  const[counter,setCounter]= useState(0)
   
  const incrementfunction=()=>{
    setCounter(counter+1)
  }
  const decrementfunction=()=>{
    setCounter(counter-1)
  }

  return (
    <div className="App">
    <Card style={{width:'18rem',height:'300px',borderRadius:"20px",backgroundColor:'black', boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25"}}>
      <Card.Body>
        <Card.Title style={{color:"white"}}>COUNTER</Card.Title>
        <Card.Subtitle style={{textAlign:"center",marginTop:"30px",fontSize:"50px",color:"white"}}>{counter}</Card.Subtitle>
        <Button variant='warning' style={{marginRight:"50px",marginTop:"100px"}} onClick={incrementfunction} >Increment</Button>
        <Button variant='warning' style={{marginTop:"100px"}} onClick={decrementfunction}>Decrement</Button>
      </Card.Body> 
    </Card>
    </div>
  );
}

export default App;
