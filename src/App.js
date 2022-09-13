import ReactButton from './components/ReactButton.js'
import ReactTable from './components/ReactTable'
import ReactComboBox from './components/ReactCoboBox.js'
import React from 'react';
import io from "socket.io-client";
import './App.css';

const socket = io.connect("http://localhost:3001");

function App() {
  
  const [userid, setuserid] = React.useState('')
  const [volume, setvolume] = React.useState('')
  const [destination, setdestination] = React.useState('')
  const [mission, setmission] = React.useState([])
  return(
    <body>
      <div className = 'container'>

        <div className = 'Table'>
          <ReactTable mission = {mission}></ReactTable>  
        </div>
      
        <div className = 'ComboBox'>
          <ReactComboBox userid = {userid} setuserid = {setuserid}
          volume = {volume} setvolume = {setvolume} setdestination = {setdestination}></ReactComboBox>
        </div>
      
        <div className = 'Button'>
          <div className = 'Box'>
            <ReactButton socket = {socket} text = {'發送任務'} mission = {mission} setmission = {setmission} 
            userid = {userid} destination = {destination} volume = {volume}></ReactButton>
          </div>
          <div className = 'Box'>
            <ReactButton socket = {socket} text = {'清空任務'} mission = {mission} setmission = {setmission} 
            userid = {userid} destination = {destination} volume = {volume}></ReactButton>`
          </div>
        </div> 
      </div>
    </body> 
  );
    

}

export default App;
