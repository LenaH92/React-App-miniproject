import { NavLink } from "react-router";

function Sidebar() {
    return (<div className="sidebar">

        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>

    </div>)
}


export default Sidebar;