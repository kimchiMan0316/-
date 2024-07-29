import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <h1>home</h1>
            <Link to="/login">로그인 하기</Link><br/>
            <Link to="/post">게시글 보기</Link><br/>
            <Link to="/create-post">게시글 쓰기</Link>
        </>
    );
}