import React from 'react'
import EditKategoriSection from 'components/kategori/EditKategoriSection'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function EditKategori() {
    return (
        <div>
            <Sidebar />
            <div id="right-panel" className="right-panel" >
                <Navbar />
                <EditKategoriSection/>
                <div className="clearfix"></div>
                <Footer />
            </div>
        </div>
    )
}
