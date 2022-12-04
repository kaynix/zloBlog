import { use } from "react";
import PostItem from "./PostItem/PostItem"

async function getPosts() {
    let res =  await fetch("http://localhost:3000/api/getPostsList");
    
    return res.json();
}

export default function PostsBlock (){
    let posts = use(getPosts());
    console.log(posts);
    
    return (<>
        {posts.map(el => {
            return <PostItem title={el.title} content={el.content} key={el.title} />;
        })}
    </>)
}