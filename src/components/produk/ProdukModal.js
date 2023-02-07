import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function ProdukModal(props) {
    let history = useHistory();
    const [values, setValues] = useState({
        nama: "",
        nama_kategori: "",
        deskripsi: "",
        satuan: "",
        stok: "",
        img: null,
        harga: "",
        id_kategori: ""
    });
    const [showimg, setShowImg] = useState(false);
    const [url, setUrl] = useState("");
    //destructuring
    const { nama,nama_kategori , deskripsi, satuan, stok, img, harga,id_kategori } = values;

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
            method: "POST",
            //new headers to pass API-PKM token
            headers: new Headers({
                token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                // STOP! Do not add the following header!
                // 'Content-Type': 'multipart/form-data'
            }),
            //we send the data through body params
            body: data,
        })
            .then((res) => {
                toast.success("PRODUCT BERHASIL DI POST");
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                //If we were catch errors
                console.log(err);
            });
    }
    return (
        <div>
            <button type="button" className="btn btn-primary mb-1" data-toggle="modal" data-target="#mediumModal">
                Tambah Produk
            </button>
            <div className="modal fade" id="mediumModal" tabIndex={-1} role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <form ref={form}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mediumModalLabel">Tambah Produk</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-12">
                                <div className="card-body card-block">
                                    <div className="form-group"><label htmlFor="nama" className=" form-control-label">Nama</label><input type="text" id="nama" name="nama" value={nama} onChange={handleChange} placeholder="Nama" className="form-control" /></div>
                                    <input type="hidden" id="id_kategori" name="id_kategori" value={props.id_kategori} onChange={handleChange} placeholder="Kategori" className="form-control" />
                                    <div className="form-group"><label htmlFor="harga" className=" form-control-label">Harga</label><input type="text" id="harga" name="harga" value={harga} onChange={handleChange} placeholder="Harga" className="form-control" /></div>
                                    <div className="form-group"><label htmlFor="satuan" className=" form-control-label">Satuan</label><input type="text" id="satuan" name="satuan" value={satuan} onChange={handleChange} placeholder="Satuan" className="form-control" /></div>
                                    <div className="form-group"><label htmlFor="stok" className=" form-control-label">Stok</label><input type="text" id="stok" name="stok" value={stok} onChange={handleChange} placeholder="Stok" className="form-control" /></div>
                                    <div className="form-group"><label htmlFor="deskripsi" className=" form-control-label">Deskripsi</label><input type="text" id="deskripsi" name="deskripsi" value={deskripsi} onChange={handleChange} placeholder="Deskripsi" className="form-control" /></div>
                                    <div className="form-group"><label htmlFor="file-input" className=" form-control-label">File Gambar</label><input type="file" id="file-input" name="img" onChange={handleFileChange} className="form-control-file" /></div>

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
