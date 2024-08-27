import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const H1 = styled.h1`
    color: #fff;
    font-size: 40px;
    margin: 300px;
    transition: all 1s ease-in;
`


export default function About(){
    const [firstTime, setFirsttime] = useState("UNTITY")
    useEffect(()=>{
       
    },[])
    return(
        <Wrapper>
            <H1>{firstTime}</H1>
        </Wrapper>
    );
}