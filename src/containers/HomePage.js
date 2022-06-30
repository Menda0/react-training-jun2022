
import {Link} from "react-router-dom"

const HomePage = () => {
    return(
        <ul>
            <li><Link to="/examples/styling">Styling Page</Link></li>
            <li><Link to="/examples/stateprops">State Props Page</Link></li>
            <li><Link to="/examples/lifecycle">Lifecycle Page</Link></li>
            <li><Link to="/examples/hooks">Hooks Page</Link></li>
            <li><Link to="/examples/redux">Redux Page</Link></li>
        </ul>
    )
}

export default HomePage