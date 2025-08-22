// import { Children } from "react";
import App from "./components/App/App";
import Contactpage from "./components/Contactpage/Contactpage";
import Errorpage from "./components/Errorpage/Errorpage";
import Homepage from "./components/Homepage/Homepage";
import Shoppage from "./components/Shoppage/Shoppage";

const routes = [

    {
        path: "/",
        element: <App/>,
        errorElement:<Errorpage/>,
        children: [
            {index:true, element: <Homepage/>},
            {path: 'contact/', element: <Contactpage/>},
            {path:'shop/', element: <Shoppage/>},
        ],
    },

]

export default routes;