import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;
const H = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: gray;
    margin-bottom: 15px;
`
const P = styled.p`
    color: gray;
    margin-top: 15px;

`


export default function ErrorPage(){
   
    return(
        <Wrapper>
            <H>404 Not Found ERROR</H>
            <H>찾을 수 없는 페이지입니다</H>
            <P><Link style={{color:"cornflowerblue",textDecoration:"none"}} to="/">여기</Link>를 클릭해주세요</P>
        </Wrapper>
    );
}