import React from 'react';
import {Link} from "react-router-dom";

const AdminLayout = (props) => {
    console.log(props)
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-around align-items-center">
                    <div>
                        <i className="fas fa-user"></i>
                    </div>

                    <div>
                        <h5 className="mb-1"><strong>Jasur Jo'rayev</strong></h5>
                        <p className="mb-0"><strong>Adminstrator</strong></p>
                    </div>

                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/menus" ? 'active' : ""}`}>menular</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/news" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                            <Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>yangiliklar</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;