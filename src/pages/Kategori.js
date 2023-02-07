import React from 'react'
import KategoriSection from 'components/kategori/KategoriSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function Kategori() {
    return (
        <div>
             <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <KategoriSection />
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
