import { useState } from "react";

export default function CreateForm(){
    const [username, setName]=useState("");
    const [userId, setId]=useState("");
    const [password, setPw]=useState("");
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleId = (e)=>{
        setId(e.target.value);  
    }
    const handlePw = (e)=>{
        setPw(e.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const createAccount = {
            method: "POST",
            body : JSON.stringify({
                name: username,
                id : userId,
                pw : password,
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        fetch('url', createAccount)
        .then((res)=>{
            console.log(res);
            res.json()
        })
        .then((data)=>{
            console.log(data);
            if(data.result === "ok"){
                window.location.href = "/login"
            }
        })
        
    }
    return(
        <>
            <h1>Create-Account</h1>
            <form action="post" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="이름을 입력해주세요" onChange={handleName} value={username} />
                <input type="text" name="id" placeholder="ID" onChange={handleId} value={userId}/>
                <input type="password" name="password" placeholder="PW" onChange={handlePw} value={password}/>
                <input type="submit"/>
            </form>
        </>
    );
}