import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/components/HomeLayout/HomeLayout";
import Profile from "../assets/components/Profile";
import Games from "../assets/components/Games";
import Error from "../assets/components/Error";
import Home from "../assets/components/Home";
import Login from "../assets/pages/Login";
import Register from "../assets/pages/Register";

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
         path:"profile",
          Component:Profile,
      },
    {
        path:"/details",
        element:<h2>Hello profile</h2>
    },
    {
        path:"/login",
        Component:Login
    },
    {
        path:"/register",
        Component:Register,
    },
    {
        path:"/error",
        element:<h2>Hello Error</h2>
    }

 ])

 export default router;