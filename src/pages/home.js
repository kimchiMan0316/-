import Post from "../components/post";

const inf = {
    name : "parksolego",
    imgURL : "image/untity.png",
    like : 5,
    text : "아무글이나 쓰기"
}

export default function Home(){
    return(
        <Post props={inf}/>
    );
}