import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'
import LaporanBulanSection from 'components/laporan/LaporanBulanSection'

export default function LaporanPerbulan() {
    return (
        <div>
             <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <LaporanBulanSection/>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
