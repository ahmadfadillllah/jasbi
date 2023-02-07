import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function EditSection() {
    let params = useParams();
    let history = useHistory();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://choicepos.id:2010/api/v1/produk?id_produk=${params.slug}`
            )
            .then((res) => {
                setValues({ ...values, ...res.data.data[0]});
                console.log(res.data.data[0])
            });

    }, []);

    const [values, setValues] = useState({
        nama: "",
        deskripsi: "",
        satuan: "",
        stok: "",
        img: null,
        harga: "",
        id_produk: params.slug,
    });
    const [showimg, setShowImg] = useState(false);
    const [url, setUrl] = useState("");
    //destructuring
    const { nama, deskripsi, satuan, stok, img, harga, id_produk } = values;

    //form data ref
    const form = useRef(null);

    function handleChange(e) {
        //spread values then change
        setValues({ ...values, [e.target.name]: e.target.value });

        // console.log(values);
    }

    function handleFileChange(e) {
        // e.preventDefault();
        console.log(e.target.files[0]);
        setUrl(URL.createObjectURL(e.target.files[0]));
        setShowImg(true);
        setValues({ ...values, img: URL.createObjectURL(e.target.files[0]) });
    }


    function handleSubmit(e) {
        e.preventDefault();
        //Gather all Raw data and make it as a FormData
        const data = new FormData(form.current);
        console.log(data);
        //use fetch instead of axios
        fetch("http://choicepos.id:2010/api/v1/produk", {
            method: "PUT",
            //new headers to pass API-PKM token
            headers: new Headers({
                token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
            }),
            //we send the data through body params
            body: data,
        })
            .then((res) => {
                console.log(res);
                history.goBack();
                toast.success("PRODUCT BERHASIL DI UPDATE");
            })
            .catch((err) => {
                //If we were catch errors
                console.log(err);
            });
    }
    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Edit Produk</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Produk</a></li>
                                        <li className="active">Edit Produk</li>
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
                                    <strong>Edit Produk</strong>
                                </div>
                                <div className="card-body card-block">
                                    <form className="form-horizontal" ref={form}>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="nama" className=" form-control-label">Nama</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="nama" name="nama" value={nama} onChange={handleChange} className="form-control" /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="harga" className=" form-control-label">Harga</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="harga" name="harga" value={harga} onChange={handleChange} className="form-control" /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="satuan" className=" form-control-label">Satuan</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="satuan" name="satuan" value={satuan} onChange={handleChange} className="form-control" /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="stok" className=" form-control-label">Stok</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="stok" name="stok" value={stok} onChange={handleChange} className="form-control" /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="deskripsi" className=" form-control-label">Deskripsi</label></div>
                                            <div className="col-12 col-md-9"><input type="text" id="deskripsi" name="deskripsi" value={deskripsi} onChange={handleChange} className="form-control" /></div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="file-input" className=" form-control-label">File Gambar</label></div>
                                            <div className="col-12 col-md-9"><input type="file" id="file-input" name="img" onChange={handleFileChange} className="form-control-file" /></div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="hidden"
                                                value={params.slug}
                                                className="form-control"
                                                name="id_produk"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <br></br>
                                        <div className="">
                                            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-sm">
                                                <i className="fa fa-dot-circle-o" /> Submit
                                            </button>
                                            <button type="reset" className="btn btn-danger btn-sm">
                                                <i className="fa fa-ban" /> Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
