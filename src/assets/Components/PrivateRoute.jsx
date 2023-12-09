import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { contextProvider } from "./AppContext"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(contextProvider)

    const location =useLocation()
    
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-primery"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoute