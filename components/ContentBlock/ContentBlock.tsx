import { use } from "react";
import PostItem from "./PostItem/PostItem"
import Link from "next/link";
import { PostData } from "../../app/api/post/[post]/route";

async function getPosts() {
    let res =  await fetch("http://localhost:3000/api/posts");
    
    return res.json();
}

export default function ContentBlock (){
    let posts:PostData[] = use(getPosts());
    
    return (<>
        {posts.map(el => {        
            return (<Link key={el.id} href={`/blogpost/${el.id}`}><PostItem key={el.id} id={el.id}  title={el.title} content={el.content} author={el.author} date={el.postedDate}/> </Link>);
        })}
    </>)
}