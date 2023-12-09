import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotePass from "../Pages/ForgotePass";
import AddJobs from "../Pages/AddJobs";
import BidRequests from "../Pages/BidRequests";
import MyBids from "../Pages/MyBids";
import Mypostedjobs from "../Pages/Mypostedjobs";
import PrivateRoute from "./PrivateRoute";
import JobDetaile from "../Pages/JobDetaile";
import UpdateJob from "../Pages/UpdateJob";
import FindAllJob from "../Pages/FindAllJob";
const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root> </Root>,
        errorElement: <ErrorPage> </ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home> </Home>
            },
            {
                path: '/Login',
                element: <Login> </Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/forgote-password',
                element: <ForgotePass> </ForgotePass>
            },
            {
                path: '/submit-job',
                element: <PrivateRoute><AddJobs> </AddJobs></PrivateRoute>
            },
            {
                path: '/Bid-Requests',
                element: <PrivateRoute><BidRequests> </BidRequests> </PrivateRoute>,
                loader: ()=> fetch('https://assignment11-server-site-ashen.vercel.app/allapplyjob')
            },
            {
                path: '/My-Bids',
                element: <PrivateRoute><MyBids> </MyBids></PrivateRoute>,
            },
            {
                path: '/My-posted-jobs',
                element: <PrivateRoute><Mypostedjobs> </Mypostedjobs></PrivateRoute>
               
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetaile> </JobDetaile></PrivateRoute>,
                loader: () => fetch('https://assignment11-server-site-ashen.vercel.app/postobdata')
            },
            {
                path: '/update-job/:id',
                element: <PrivateRoute> <UpdateJob> </UpdateJob> </PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment11-server-site-ashen.vercel.app/postobdata/${params.id}`)
            },
            {
                path: '/find-jobs',
                element: <FindAllJob></FindAllJob>
            },
        ]

    },
]);
export default Route