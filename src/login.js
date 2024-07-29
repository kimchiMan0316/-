import { Link } from "react-router-dom";
import LoginForm from "./component/loginform";

export default function Login(){
    return(
        <>
            <h1>LOGIN</h1>
            <LoginForm/>
            <Link to="/create-accout">create account?</Link><br/>
            <Link to="/">홈으로 가기</Link>
        </>
    );
}