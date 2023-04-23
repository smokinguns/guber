"use client";
import { getVidoeData } from '@/app/fetch-video';
import Player from '@/lib/components/player';
import {logger} from '../../logger';
import React, { useState } from 'react'
import { TextField } from '@mui/material';







export default async function Page() {
  const [videoId, setVideoId] = useState("");
 
  return <div>

<TextField label=" Id" value={videoId} onChange={(event) => {
                                setVideoId(event.target.value);

                            }}></TextField>
  

<Player videoId={videoId} startPos={0} endPos={0}></Player>
  </div>
  
}
