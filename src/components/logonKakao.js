import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const Button = styled.button`
    width: 360px;
    height: 50px;
    margin: 20px 10px 10px 10px;
    border: none;
    border-radius: 5px;
    &:hover{
        opacity: 0.92;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`



export default function KakaoLoginButtin(){
    return(
        <Wrapper>
            <Button>
                <Img src={process.env.PUBLIC_URL + '/image/kakao.png'}/>
            </Button>
        </Wrapper>
    )
}