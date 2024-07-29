import CreateForm from "./component/create";
import { Link } from "react-router-dom";

export default function CreateAccount(){
    return(
        <>
            <Link to="/">홈으로 가기</Link>
            <h1>회원가입하기</h1>
            <CreateForm/>
        </>
    );
}