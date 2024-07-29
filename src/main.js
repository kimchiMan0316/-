import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Post(){
    const [username, setUsername] = useState("");
    const [post, setPost] = useState(""); 

    const getPost = ()=>{
        fetch("", {method: "POST",})
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsername(data.name);
            setPost(data.text);
        })
    }
    useEffect(()=>{
        getPost();
    },[])
    return(
        <>
            <Link to="/">홈으로 가기</Link>
            <h1>게시글 보기</h1>
            <h3>작성자 {username}</h3>
            <p>{post}</p>
        </>
    );
}