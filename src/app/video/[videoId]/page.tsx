
import { getVidoeData } from '@/app/fetch-video';
import Player from '@/lib/components/player';
import {logger} from '../../../logger';
import React from 'react'







export default async function Page({params,searchParams}:any) {
 
  console.log(logger.log());
  console.log(params);

  const video = await getVidoeData(params.videoId);
  const section = video.section[0];
  console.log('^^^^^');
  return <div>

<h1 className="text-3xl font-bold">
    {video.title} 
</h1>
  

<Player videoId={video.videoId} sections={video.section} startPos={searchParams.startPos} endPos={searchParams.endPos}></Player>
  </div>
  
}
