import ProdukSection from 'components/produk/ProdukSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import React from 'react'

export default function Produk() {
    return (
        <div>
            <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <ProdukSection />
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
