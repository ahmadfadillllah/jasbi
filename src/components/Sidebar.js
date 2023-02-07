import React from 'react'
import { useHistory } from "react-router-dom";


export default function Sidebar() {
    let history = useHistory();
    function handleLogOut() {
    window.localStorage.removeItem("adminToken");
    history.push("/");
  }
    return (
        <div>
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="">
                                <a href="/dashboard"><i className="menu-icon fa fa-laptop" />Dashboard </a>
                            </li>
                            <li className="menu-title">Menu</li>{/* /.menu-title */}
                            <li>
                                <a href="/kategori"> <i className="menu-icon ti-package" />Produk </a>
                            </li>
                            <li>
                                <a href="/pelanggan"> <i className="menu-icon ti-user" />Pelanggan </a>
                            </li>
                            <li>
                                <a href="/laporan"> <i className="menu-icon ti-write" />Laporan </a>
                            </li>
                            <li>
                                <a onClick={() => handleLogOut()} style={{ cursor: "pointer" }}> <i className="menu-icon ti-shift-left" />Log Out </a>
                            </li>
                        </ul>
                    </div>{/* /.navbar-collapse */}
                </nav>
            </aside>

        </div>
    )
}
