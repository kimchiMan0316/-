import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Top = styled.div`
    background-color: #e37676;
    display: flex;
    width: 500px;
    justify-content: space-between;
    padding: 20px 10px;
    font-size: 15px;
    font-weight: 600;
`
const Logo = styled.div`
    font-size: 18px;
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`
const Profile = styled.div`
`
const Like = styled.div`
`
const Chat = styled.div`
`
const a = {
    color: "white",
    textDecoration: "none"
}

export default function TopLayout(){
    return(
        <>
            <Top>
                <Logo><Link style={a} to="/">UNTITY@2</Link></Logo>
                <Div>
                    <Profile><Link style={a} to="/profile">프로필</Link></Profile>
                    <Like><Link style={a} to="/login">로그아웃</Link></Like>
                    <Chat><Link style={a} to="/">채팅</Link></Chat>
                </Div>
            </Top>
            <Outlet/>
        </>
    );
}