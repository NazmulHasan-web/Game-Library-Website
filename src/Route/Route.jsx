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
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../assets/pages/Loading";
import ForgetPassword from "../assets/pages/ForgetPassword";
import UpdateProfile from "../assets/components/UpdateProfile";
import NewGames from "../assets/components/NewGames";

 const router=createBrowserRouter([
    {
        path:"/",
       element:<HomeLayout></HomeLayout>,
        loader:()=>fetch("/gamesData.json"),
        hydrateFallbackElement:<Loading></Loading>,
        
        children:[
            {
                index:true,
                element:<Home></Home>,
                loader:()=>fetch("/gamesData.json"),
                hydrateFallbackElement:<Loading></Loading>,
            },
           
            {
                path:"games",
                element:<Games></Games>,
                loader:()=>fetch("/gamesData.json"),
                hydrateFallbackElement:<Loading></Loading>,
                
            },
        ]
    },
     {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }

        ]
    },

     {
         path:"/profile",
          element:<Profile></Profile>
      },
      {
        path:"/forget/password",
        element:<ForgetPassword></ForgetPassword>
     },
     {
        path:"/update/profile",
        element:<UpdateProfile></UpdateProfile>
     },
    {
        path:"/games-details/:id",
        element:<PrivateRoute>
            <Details></Details>
        </PrivateRoute>,
        loader:()=>fetch("/gamesData.json"),
        hydrateFallbackElement:<Loading></Loading>,
    },
    {
        path:"/new/games",
        element:<NewGames></NewGames>
    },
    {
        path:"*",
        element:<Error></Error>
    }

 ])

 export default router;