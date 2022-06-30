
import {Route, Routes, Navigate, useParams} from "react-router-dom"
import StylingPage from "../containers/StylingPage"
import HooksPage from "../containers/HooksPage"
import ComponentLifecyclePage from "../containers/ComponentLifecyclePage"
import StatePropsPage from "../containers/StatePropsPage"
import HomePage from "../containers/HomePage"
import LoginPage from "../containers/LoginPage"
import PrivatePage from "../containers/PrivatePage"
import UnauthorizedPage from "../containers/UnauthorizedPage"
import ReduxPage from "../containers/ReduxPage"
// import ShiroPerms from 'shiro-perms';

const RequiredAuth = ({resource, routeRole='user', children}) => {
    // Verify authentication
    // Check if it as a token to ensure that the user is authenticated
    // Get token from local storage

    // const {isAuthenticated, userRole, claims} = useAuthentication()
    const isAuthenticated = true
    const userRole = "user"
    // const claims = "store:*:1123"

    // const userPerms = ShiroPerms.from(claims);
    // const {id} = useParams()
    // const routePerms = resource.replace("${id}", id)

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }else{
        // if(!userPerms.check(routePerms)){
        //     return <UnauthorizedPage />
        // } 

        if(routeRole != userRole){
            return <UnauthorizedPage />
        }else{
            return children
        }
        
    }
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/examples/styling" element={<StylingPage />} />
            <Route path="/examples/stateprops" element={<StatePropsPage />} />
            <Route path="/examples/lifecycle" element={<ComponentLifecyclePage />} />
            <Route path="/examples/hooks" element={<HooksPage />} />
            <Route path="/examples/redux" element={<ReduxPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/protected" element={<RequiredAuth><PrivatePage/></RequiredAuth>} />
            <Route path="/protected/admin" element={<RequiredAuth routeRole="admin"><PrivatePage/></RequiredAuth>} />
            <Route path="/store/:id" element={<RequiredAuth resource="store:edit:${id}" routeRole="admin"><PrivatePage/></RequiredAuth>} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes