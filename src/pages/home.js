import { useEffect, useState } from "react";
import Post from "../components/post";

export const inf = {
    name : "parksolego",
    imgURL : "image/untity.png",
    like : 5,
    text : "아무글이나 쓰기",
    date : "2024.05.18",
}
const URL = 'url'
export default function Home(){
    const [post, setPost] = useState([])
    useEffect(()=>{
        const response =  getContents()
        setPost(response);
    },[])
    const getContents = async()=>{
        const res = await fetch(URL, 'POST')
        const result = await res.json()
        return result
    }
    return(
        <Post props={inf}/>
    );
}