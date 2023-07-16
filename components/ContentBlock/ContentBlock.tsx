import { use } from "react";
import PostItem from "./PostItem/PostItem"
import Link from "next/link";

async function getPosts() {
    let res =  await fetch("http://localhost:3000/api/posts");
    
    return res.json();
}

export default function ContentBlock (){
    let posts = use(getPosts());
    console.log(posts);
    
    return (<>
        {posts.map(el => { console.log(el);
        
            return (<Link key={el.id} href={`/blogpost/${el.id}`}><PostItem id={el.id}  title={el.title} content={el.content} key={el.title}/> </Link>);
        })}
    </>)
}