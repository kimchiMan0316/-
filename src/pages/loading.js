import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
const Loading = styled.h1`
    font-size: 40px;
    font-weight: 600;
`

export default function LoadingPage(){
    return(
        <Wrapper>
            <Loading>
                Loading...
            </Loading>
        </Wrapper>
    );
}