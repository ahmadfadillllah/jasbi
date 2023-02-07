import React from 'react'
import EditSection from 'components/produk/EditSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function EditProduk() {
    return (
        <div>
            <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <EditSection/>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
