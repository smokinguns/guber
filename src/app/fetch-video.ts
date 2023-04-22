
export async function getVidoeData(videoId:string){

   
    let resp = await fetch(`http://localhost:3000/api/video/${videoId}`,{ next: { revalidate: 10 }});
    


      return resp.json();
}