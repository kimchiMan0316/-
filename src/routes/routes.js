import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import TopLayout from "../layout/topLayout";
import Profile from "../userProfile/profile";
import Login from "../pages/login";
import CreateAccount from "../pages/createAccount";
import About from "../pages/about";
import ErrorPage from "../pages/error";

export const router = createBrowserRouter([
    {
      path:"/",
      element:<TopLayout/>,
      children:[
        {
          path:"",
          element:<Home/>,
      },
      {
        path:"/profile",
        element:<Profile/>
      },{
      }
    ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/create-account",
      element:<CreateAccount/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/*",
      element:<ErrorPage/>
    }
  ])