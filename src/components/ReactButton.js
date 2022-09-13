import * as React from 'react';
import Button from '@mui/material/Button';
import {v4} from "uuid"

export default function ReactButton(props) {
  const {text, setmission, userid, destination, volume, mission, socket} = props
  let msg = {
    "timestamp": null,
    "uuid": v4(),
    "account": userid,
    "goods": "testing",
    "task": {
      "destination": destination,
      "pickup": null,
      "weight": volume
    }
  }
  return (
      <Button size='large' variant="outlined" disableElevation onClick={() => {
        if (text === '發送任務'){
          let time = new Date(Date.now())
          msg.timestamp = time.toISOString()
          socket.emit("send_message", window.JSON.stringify(msg))
          setmission([[userid, destination, volume], ...mission])
        }else{
          setmission([])
        }
      }}>
        {text}
      </Button>  
  );
}