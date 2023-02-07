import React from 'react'

export default function EditKategoriSection() {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Edit Kategori</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Kategori</a></li>
                                        <li className="active">Edit Kategori</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="animated fadeIn">


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong>Edit Kategori</strong>
                                </div>
                                <div className="card-body card-block">
                                    <form action="#" method="post" encType="multipart/form-data" className="form-horizontal">
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="nama" className=" form-control-label">Nama</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="nama" name="nama" placeholder="Nama" className="form-control" /></div>
                                        </div>
                                       
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary btn-sm">
                                        <i className="fa fa-dot-circle-o" /> Submit
                                    </button>
                                    <button type="reset" className="btn btn-danger btn-sm">
                                        <i className="fa fa-ban" /> Reset
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
