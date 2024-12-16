import { NavLink } from "react-router";

function Sidebar() {
    return (<div className="sidebar">

        <NavLink to='/' >Home</NavLink>
        <NavLink to='/item/new' >Add a new item</NavLink>
        <NavLink to='/about' >About</NavLink>

    </div>)
}


export default Sidebar;