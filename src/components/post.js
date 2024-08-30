import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 5px ;
    border: 1px solid gray;
`
const Userinf = styled.div`
    padding: 10px;
` 
const Content = styled.div`
`
const ImgArea = styled.div`
    width: 518px;
    border: 1px solid gray;
`
const Img = styled.img`
    width: 100%;
`
const TextArea = styled.div`
    margin: 10px;
`
const Like = styled.div`
`
const Text = styled.div`
    margin-top: 10px;
`
const Date = styled.h1`
    margin-top: 10px
`
export default function Post({props}){
    const name = props.name;
    const imgURL = props.imgURL;
    const like = props.like;
    const text = props.text;
    const date = props.date;
    return(
        <Wrapper>
            <Userinf>
                <p>{name}</p>
            </Userinf>
            <Content>
                <ImgArea>
                    <Img src={imgURL}/>
                </ImgArea>
                <TextArea>
                    <Like>
                        <p>좋아요 : {like}</p>
                    </Like>
                    <Text><p>{text}</p></Text>
                    <Date>{date}</Date>
                </TextArea>
            </Content>
        </Wrapper>
    );
}