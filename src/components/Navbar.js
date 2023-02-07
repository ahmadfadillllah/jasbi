import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header id="header" className="header">
                <div className="top-left">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="./"><img src="/images/logo.png" alt="Logo" width="30" />  Jasbi</a>
                        <a className="navbar-brand hidden" href="./"><img src="/images/logo2.png" alt="Logo" /></a>
                        <a id="menuToggle" className="menutoggle"><i className="fa fa-bars" /></a>
                    </div>
                </div>
                <div className="top-right">
                    <div className="header-menu">
                        
                        <div className="user-area dropdown float-right">
                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="user-avatar rounded-circle" src="/images/admin.png" alt="User Avatar" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
