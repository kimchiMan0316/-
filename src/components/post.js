import styled from "styled-components";

const Wrapper = styled.div`
    margin: 5px ;
`
const Userinf = styled.div`
` 
const Content = styled.div`
`
const Img = styled.img`
`
const Like = styled.div``
const Text = styled.div``
export default function Post({props}){
    const name = props.name;
    const imgURL = props.imgURL;
    const like = props.like;
    const text = props.text;
    return(
        <Wrapper>
            <Userinf>
                <p>{name}</p>
            </Userinf>
            <Content>
                <Img src={imgURL}/>
                <div>
                    <Like>
                        <p>좋아요 : {like}</p>
                    </Like>
                    <Text><p>{text}</p></Text>
                </div>
            </Content>
        </Wrapper>
    );
}