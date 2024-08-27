import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Form = styled.form`
    width: 400px;
    display: grid;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
`
const Title = styled.div`
    margin-bottom: 20px;
    width: 100%;
`
const Input = styled.input`
    outline: none;
    color:#e37676 ;
    background-color: black;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #e37676;
    &[type="file"]{
        display: none;
    }
    &[type="submit"]{
        margin: 20px 0;
        background-color: #e37676;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        &:hover{
            opacity: 0.92;
        }
    }
`
const ProfilePhoto = styled.img`
    width: 150px;
    height: 150px;
    border: 1px solid #fff;
    border-radius: 50%;
`
const Label = styled.label`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`
const Swither = styled.p``

export default function CreateAccount(){
    const navigate = useNavigate();
    const [uploading, setUploading] = useState("계정 만들기");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [profilePhoto, setprofilePhoto]=useState([]);
    const [imageSrc,setImageSrc] = useState([]);
    const createAccountStyle = {
        textDecoration: "none",
        color:"#00acee"
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        setUploading("업로드 중...")
        const data = {
            username : username,
            email : email,
            password : password,
            nickname : nickname,
            profilePhoto : profilePhoto,
        }
        console.log(data)
        // 서버에 data 보내기
        setTimeout(()=>{
            setUploading("계정만들기");
            navigate("/login")
        },2000)
    };
    const onChange = (e)=>{
        const name = e.target;
        if(name.name==="username"){
            setUsername(name.value);
        }else if(name.name ==="email"){
            setEmail(name.value)
        }else if(name.name ==="password"){
            setPassword(name.value);
        }else if(name.name==="nickname"){
            setNickname(name.value);
        }
    }
    const onChangeProfile = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            setprofilePhoto(reader.result)
            resolve();
          };
        });
      };
    return(
        <Wrapper>
            <Form method="post" onSubmit={onSubmit}>
                <Title><img src={process.env.PUBLIC_URL + '/image/untity.png'} style={{width:"200px"}}/></Title>
                <Label htmlFor="profileImage">
                    <ProfilePhoto src={imageSrc} alt=""/>
                </Label>
                <Input type="file" name="profilePhoto" accept="image/*" id="profileImage" onChange={(e) => {onChangeProfile(e.target.files[0]);}}/>
                <p>프로필 사진</p>
                <Input type="text" name="username" placeholder="이름을 입력해주세요." value={username} onChange={onChange}/>
                <Input type="email" name="email" placeholder="E-mail을 입력해주세요."value={email} onChange={onChange}/>
                <Input type="password" name="password" placeholder="사용할 비밀번호를 입력해주세요." value={password} onChange={onChange}/>
                <Input type="text" name="nickname" placeholder="사용하실 닉네임을 입력해주세요." value={nickname} onChange={onChange}/>
                {/* 프로필사진 미리보기 만들기 */}
                <Input type="submit" value={uploading}/>
                <Swither>이미 계정이 있으신가요 ?  <Link style={createAccountStyle} to="/login">로그인하기 &rarr;</Link></Swither>
            </Form>
        </Wrapper>
    );
}