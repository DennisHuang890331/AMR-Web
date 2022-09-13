import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
    const {userid, setuserid, volume, setvolume, setdestination} = props
    const style = {
        margin:'auto',
        // backgroundColor: '#FEFBF6',
        // boxShadow: '2px 3px 10px #FCF8E8',
        // color: 'black',
    };
    
    return (
    <div style={{display: 'flex', justify_content: 'center',align_items: 'center'}}>
        <div style={style}>
            <TextField id="userid" label="User ID" variant="standard" value={userid} onChange={e => {setuserid(e.target.value)}}/>
        </div>
        <div style={style}>
            <Autocomplete
                onInputChange={(event, newInputValue) => {
                    setdestination(newInputValue);
                }}
                disablePortal
                id="destination"
                options={destination}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label= "目的地" />}>
            </Autocomplete>
        </div>
        <div style={style}>
            <TextField id="volume" label="貨物量" variant="standard" value={volume} onChange={e => {setvolume(e.target.value)}}/>
        </div>
    </div>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const destination = [
  { label: '1F Kitchen'},
  { label: '1F Glass Door'},
  { label: '1F pingfung'},
];
