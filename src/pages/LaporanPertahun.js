import LaporanTahunSection from 'components/laporan/LaporanTahunSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'

export default function LaporanPertahun() {
    return (
        <div>
            <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <LaporanTahunSection/>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
