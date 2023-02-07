import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'
import OrderDetailSection from 'components/dashboard/OrderDetailSection'

export default function DetailOrder() {
    return (
        <div>
            <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <OrderDetailSection/>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
