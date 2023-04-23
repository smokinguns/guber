
import { getVidoeData } from '@/app/fetch-video';
import Player from '@/lib/components/player';
import {logger} from '../../../logger';
import React from 'react'




export async function generateStaticParams() {
  return [
    {"videoId": "xUQV6x0Hm2o"}

  ];
}


export default async function Page({params,searchParams}:any) {
 
 
  const video = await getVidoeData(params.videoId);
  const section = video.section[0];
  
  return <div>

<h1 className="text-3xl font-bold">
    {video.title} 
</h1>
  

<Player videoId={video.videoId} sections={video.section} startPos={section.start} endPos={section.end}></Player>
  </div>
  
}
