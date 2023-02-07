import React, { Component } from 'react'
import KategoriModal from './KategoriModal'
import axios from "axios";
import { toast } from "react-toastify";


export default class KategoriTable extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get("http://choicepos.id:2010/api/v1/kategori").then((res) => {
            const data = res.data.data;
            this.setState({ data });
        });
    }

    onDelete(id) {
        if (window.confirm("Ingin menghapus kategori ini?")) {
            axios
                .delete("http://choicepos.id:2010/api/v1/kategori", {
                    headers: {
                        "Content-Type": "application/json",
                        token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                    },
                    data: {
                        id: id,
                    },
                })
                .then((res) => {
                    console.log(res);
                    toast.success("KATEGORI BERHASIL DI HAPUS");
                    window.location.reload();
                });
        }
    }
    render() {
        const kategori = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Table Kategori</strong>
                            </div>

                            <div className="card-body">
                                <KategoriModal /><br></br>
                                <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Detail</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kategori.data.map((item, i) => {
                                            return (
                                                <tr key={i + 1}>
                                                    <td>{i + 1}</td>
                                                    <td>{item.nama_kategori}</td>
                                                    <td className="td-actions">
                                                        <a
                                                            href={`/produk/${item.id}`}
                                                            type="button"
                                                            rel="tooltip"
                                                            className="btn btn-info btn-sm"
                                                        >
                                                            Detail
                                                        </a>
                                                    </td>
                                                    <td className="td-actions text-right">
                                                       
                                                        <button
                                                            rel="tooltip"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => this.onDelete(item.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
