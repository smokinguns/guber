
import { getVidoeData } from '@/app/fetch-video';
import Player from '@/lib/components/player';
import {logger} from '../../../logger';
import React from 'react'







export default async function Page({params,searchParams}:any) {
 
 
  return <div>


  

<Player videoId={params.videoId} startPos={0} endPos={0}></Player>
  </div>
  
}
