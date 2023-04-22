import 'server-only'
import {cache} from 'react';
import { headers } from 'next/headers';





export  const  logger = {
    log:()=>{
       console.log(headers().get('x-request-id'));
    }
}  