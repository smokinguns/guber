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
        case "gcLLOTvSQkM":
            return {
                "videoId":"gcLLOTvSQkM",
                "title":"Tool 46 and 2",
                "section":[{
                    "title":"intro",
                    "start": 17,
                    "end": 23
                }]
            
            }


           
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