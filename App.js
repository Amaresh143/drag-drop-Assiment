
import {  useState ,useEffect} from 'react';
import { Typography } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Table, Button, DialogContent, DialogContentText, } from "@material-ui/core";
function App() {
  const [employee, setEmployee] = useState()
  const [response, setResponse] = useState(true)
  
  useEffect(() => {
    getData()
  }, [])

  const getData=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((resp)=>{
      setEmployee(resp.data)
      setResponse(false)
      console.log(getData);
    })
  }
  return(
    <>
    
    </>
  );
}

export default App;
