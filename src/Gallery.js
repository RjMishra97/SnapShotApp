import "./app.css"


import { useEffect, useState } from "react";


const Gallery=()=>{
     
    const [deta,setdata]=useState([])
    const [name,setname]=useState("")
    const apikey="da58b1980739dcf01d22e3b77068f10c"
    useEffect(()=>{
       
          searchresults(name)
         
    
       },[name])
    

               

function searchresults(name){
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${name}&per_page=20&page=1&format=json&nojsoncallback=1&`).then((res)=>{
        return res.json()
   }).then((data)=>{setdata(data.photos.photo)})
   .catch((err)=>{console.log(err)})
   
   
}

function changename(event){
    
    setname(event.target.value)
   

   
}


return (
    <>
    <h1>SnapShot</h1>
        <input type="text" placeholder="Search" onChange={changename} value={name}/>
        <button onClick={searchresults}>serach</button>
        <div>
        <button onClick={()=>{searchresults("Mountain")}}>Mountain</button>
        <button onClick={()=>{searchresults("beaches")}} >Beaches</button>
        <button onClick={()=>{searchresults("birds")}}>Birds</button>
        <button onClick={()=>{searchresults("foods")}}>Foods</button>
        </div>
       
      
      <div className="main-items">
     
      {
        deta.map((ele,index) => {
            
            console.log(ele)
            let url=`http://live.staticflickr.com/${ele.server}/${ele.id}_${ele.secret}.jpg`
            
            
            return <img src={url} alt="pics" key={index}/>
           
        
        })
    }
       


</div>
    </>
    )
}
    

export default Gallery;