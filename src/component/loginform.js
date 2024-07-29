import { useState } from "react";

export default function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const onChangeUsername = (e) =>{
        console.log(e.target.value);
        setUsername(e.target.value)
    }
    const onChangePassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(username, password);
        const data = {
            id : username,
            pw : password,
        }
        console.log(data);
        fetch("/login", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res)=>{
            console.log(res);
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            if(data.result === "ok"){
                localStorage.setItem("name", data.name);
                window.location.href = "/"
            }
        })

    }

    return(
        <>
            <form action="post" onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={onChangeUsername} value={username} placeholder="USERNAME"/>
                <input type="password" name="password" onChange={onChangePassword} value={password} placeholder="PW"/>
                <input type="submit" value="LOGIN"/>
            </form>
        </>
    );
}