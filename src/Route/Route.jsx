import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/components/HomeLayout/HomeLayout";
import Profile from "../assets/components/Profile";
import Games from "../assets/components/Games";
import Error from "../assets/components/Error";
import Home from "../assets/components/Home";

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
        element:<h2>Hello router</h2>
    },
    {
        path:"/error",
        element:<h2>Hello Error</h2>
    }
 ])

 export default router;