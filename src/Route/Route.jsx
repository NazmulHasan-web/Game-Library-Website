import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/components/HomeLayout/HomeLayout";
import Profile from "../assets/components/Profile";
import Games from "../assets/components/Games";
import Error from "../assets/components/Error";
import Home from "../assets/components/Home";
import Login from "../assets/pages/Login";
import Register from "../assets/pages/Register";
import AuthLayout from "../assets/pages/AuthLayout";
import Details from "../assets/components/Details";

 const router=createBrowserRouter([
    {
        path:"/",
       Component:HomeLayout,
        loader:()=>fetch("/gamesData.json"),
        
        children:[
            {
                index:true,
                Component:Home,
                loader:()=>fetch("/gamesData.json"),
            },
           
            {
                path:"games",
                Component:Games,
                loader:()=>fetch("/gamesData.json"),
                
            },
            {
                path:"*",
                Component:Error
            },
        ]
    },
     {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                Component:Login,
            },
            {
                path:"/auth/register",
                Component:Register,
            }

        ]
    },

     {
         path:"profile",
          Component:Profile,
      },
    {
        path:"/games-details/:id",
        element:<Details></Details>,
        loader:()=>fetch("/gamesData.json"),
    },
    {
        path:"/error",
        element:<h2>Hello Error</h2>
    }

 ])

 export default router;