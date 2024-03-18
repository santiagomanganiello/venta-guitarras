import { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const navigate = useNavigate()
    const isAuth = true
    
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return <Outlet/>
}

export default PrivateRoute