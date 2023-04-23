
export async function getVidoeData(videoId:string){

   
    let resp = await fetch(`http://0.0.0.0:3000/api/video/${videoId}`,{ next: { revalidate: 10 }});
    


      return resp.json();
}