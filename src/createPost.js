import { useState } from "react";

export default function CreatePost(){
    const [a,setA]=useState("")
    const [text, setText] = useState("");
    const handlePost = (e)=>{
        setText(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            username : localStorage.getItem("name"),
            text : text,
        }
        fetch("url",{
            method:'POST',
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(data),
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            if(data.result==="ok"){
                setA("씨빨 성공");
                setTimeout(()=>{
                    window.location.href = "/";
                },2000)
               
            }
        })
    }
    return(
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" onChange={handlePost} value={text}/>
                <input type="submit" value="확인"/>
                <p>{a}</p>
            </form>
        </>
    );
}