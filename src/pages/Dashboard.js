import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'
import DashboardSection from 'components/dashboard/DashboardSection'

export default function Dashboard() {
    return (
        <div>
        <Sidebar/>
        <div id="right-panel" className="right-panel" >
            <Navbar/>
            <DashboardSection/>
            <div className="clearfix"></div>
            <Footer/>
        </div>

        </div>
    )
}
