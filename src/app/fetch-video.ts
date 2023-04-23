
export async function getVidoeData(videoId:string){

   
    let resp = await fetch(`http://localhost:8888/api/video/${videoId}`,{ next: { revalidate: 10 }});
    


      return resp.json();
}