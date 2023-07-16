'use client'
import { use } from "react";
import { PostData } from "../../api/post/[post]/route";

async function getPostById(id:PostData) {
  try {
    let res =  await fetch(`http://localhost:3000/api/post/${id}`);
    console.log(res.status);
    
    if(res.status === 200){return res.json()} else {return {}}
  } catch (error) {
    console.log(error);
    
    return {}  
  }
}

export default function post({params}) {
  let pstdata:PostData = use(getPostById(params.post))
  console.log("asddsa: ",params);
  console.log(pstdata);
  
  
  return (
    <section>
      <h1>{`#${pstdata.id} ${pstdata.title}`}</h1>
      <p>{`${pstdata.content}`}</p>
    </section>
  )
}
