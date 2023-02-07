import React, { Component } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

export default class PelangganTable extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://choicepos.id:2010/api/v1/pelanggan", {
                headers: {
                    token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                },
            })
            .then((res) => {
                const data = res.data.data;
                this.setState({ data });
            });
    }

    onDelete(id) {
        if (window.confirm("Apakah anda ingin menghapus data pelanggan ini?")) {
            axios
                .delete("http://choicepos.id:2010/api/v1/pelanggan", {
                    headers: {
                        "Content-Type": "application/json",
                        token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                    },
                    data: {
                        id_pelanggan: id,
                    },
                })
                .then((res) => {
                    console.log(res);
                    toast.success("PELANGGAN BERHASIL DI HAPUS");
                    window.location.reload();
                });
        }
    }
    render() {
        const pelanggan = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Table Produk</strong>
                            </div>

                            <div className="card-body">
                                <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Alamat</th>
                                            <th>No. Hp</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pelanggan.data.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{item.nama}</td>
                                                    <td>{item.alamat}</td>
                                                    <td>{item.nohp}</td>
                                                    <td>{item.email}</td>
                                                    <td className="td-actions text-right">
                                                        <button
                                                            rel="tooltip"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() =>
                                                                this.onDelete(item.id_pelanggan)
                                                            }
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
