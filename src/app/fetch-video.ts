import { NextResponse } from "next/server";

export async function getVidoeData(videoId:string){

    switch(videoId){
        case "xUQV6x0Hm2o":
            return  {
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
            };


           
    }
    return  {
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
    };
}