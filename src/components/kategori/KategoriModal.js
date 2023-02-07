import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function KategoriModal() {
    const [values, setValues] = useState({
        nama: "",

    });
    const { nama} = values;
    //   history = useHistory();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        let urlencoded = new URLSearchParams();
        urlencoded.append("nama_kategori", nama);
        let data = {
            nama_kategori: nama,
        };
        axios
            .post("http://choicepos.id:2010/api/v1/kategori", 
                urlencoded,
                {
                    headers: {
                        'token': "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                    },
                })
            .then((res) => {
                toast.success("KATEGORI BERHASIL DI POST");
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                toast.error("Tidak dapat registrasi");
            });
    };
    return (
        <div>
            <button type="button" className="btn btn-primary mb-1" data-toggle="modal" data-target="#mediumModal">
                Tambah Kategori
            </button>
            <div className="modal fade" id="mediumModal" tabIndex={-1} role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mediumModalLabel">Tambah Kategori</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-12">
                                <div className="card-body card-block">
                                    <div className="form-group"><label htmlFor="nama" className=" form-control-label">Nama</label>
                                        <input type="text" name="nama" id="nama" value={nama} onChange={handleChange} placeholder="Nama" className="form-control" /></div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
