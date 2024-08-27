import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import KakaoLoginButtin from "../components/logonKakao";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;
const Title = styled.div`
    color:#e37676;
    width: 200px;
`
const P = styled.p`
    margin-bottom: 25px;
`
const Form = styled.form`
    flex-direction: column;
    width: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 50px 10px;
    border: 1px solid #e37676;
    border-radius: 10px;
`;
const Input = styled.input`
    width: 340px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    &[name="id"]{
        
    }
    &[type="submit"]{
        width: 360px;
        font-weight: 600;
        background-color: #e37676;
        color: white;
        &:hover{
            opacity: 0.92;
        }
    }
`;
const Swither = styled.p`
    margin-top: 5px;
`
const createAccountStyle = {
    textDecoration: "none",
    color:"#00acee"
}
export default function Login(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogins] = useState("로그인");
    const navigate = useNavigate()
    var loginInf={
        userName: id , 
        passWord: password,
    }

    const onChange = (e)=>{
        const name = e.target.name
        if(name === "id"){
            setId(e.target.value);
            console.log(id)
        }else if(name === "password"){
            setPassword(e.target.value);
            console.log(password)
        }
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(loginInf)
        setLogins("계정 확인중...");
        setTimeout(()=>{
            setLogins("로그인");
            navigate("/")
        },2000)
    }
    const getLogin = async()=>{
        const res = await fetch("/api/login", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInf)
        })
        if(res.result === 1){
            navigate("/")
        }else if(res.result === 2){
            alert("아아디를 확인해주세요")
        }else if(res.result === 3){
            alert("비밀번호를 확인해주세요")
        }
    }

    return(
        <Wrapper>
            <Form onSubmit={handleLogin} method="post">
                <Title><img src={process.env.PUBLIC_URL + '/image/untity.png'} style={{width:"100%"}}/></Title>
                <P>더 새롭고 더 자극적인 한남들의 커뮤니티</P>
                <Input type="text" placeholder="ID" name="id" onChange={onChange} value={id} required/>
                <Input type="password" placeholder="PW" name="password" onChange={onChange} value={password} required/>
                <Input type="submit" value={login}/>
                <Swither>아직 계정이 없으신가요?.  <Link style={createAccountStyle} to="/create-account">계정 만들기 &rarr;</Link></Swither>
                <KakaoLoginButtin/>
            </Form>
        </Wrapper>
    );
}