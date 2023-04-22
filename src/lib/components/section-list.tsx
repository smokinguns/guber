'use client'

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export default  function  SectionList(props:any){
   console.log(props.items)
    return <ul>
         {  props.items.map((section:any ) => 
                <li key={section.title}><a href={`/video/${props.videoId}?startPos=${section.start}&endPos=${section.end}`}>{section.title}</a></li>
            )}
    </ul>

}