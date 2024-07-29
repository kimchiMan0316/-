import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Post from "./main";
import CreateAccount from "./create-account";
import End from "./end";
import CreatePost from "./createPost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/create-accout" element={<CreateAccount/>}/>
        <Route path="/end" element={<End/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
