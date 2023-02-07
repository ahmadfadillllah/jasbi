import React from 'react'
import LaporanTahun from './LaporanTahun'

export default function LaporanTahunSection() {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Laporan</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Laporan</a></li>
                                        <li className="active">Laporan Pertahun</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="animated">
                    <LaporanTahun />
                </div>
            </div>
        </div>
    )
}
