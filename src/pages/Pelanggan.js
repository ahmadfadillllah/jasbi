import PelangganSection from 'components/pelanggan/PelangganSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'

export default function Pelanggan() {
    return (
        <div>
             <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <PelangganSection />
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
