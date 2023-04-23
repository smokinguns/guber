'use client'
import { TextField } from '@mui/material';
import { useState } from 'react';
import Player from './player';
export default function HostContainer(props: any) {
    const [videoId, setVideoId] = useState("");
    return <div>
        <TextField value={videoId} onChange={(event)=>{
            setVideoId(event.target.value);
        }}></TextField>
       {videoId.length >0 ?<Player videoId={videoId}></Player> : <></>}
       
    </div>


}