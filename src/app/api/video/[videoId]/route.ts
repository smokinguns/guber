import { NextResponse } from 'next/server';
import {logger} from '../../../../logger';
export async function GET(request: Request, {params}:any) {
    
    console.log(logger.log());

    switch(params.videoId){
        case "xUQV6x0Hm2o":
            return NextResponse.json( {
                "videoId": "xUQV6x0Hm2o",
                "title":"MR Tabs Paradise City",
                "section": [
                    {"title":"intro",
                     "start":50,
                     "end": 80
                    },
                    {
                        'title':'chrous',
                        'start': 88,
                        'end': 95
                    }
                ]
            });


           
    }

    return NextResponse.json( {"title": "not found"});
  }
  