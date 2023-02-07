import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LaporanBulan() {
    const [pendapatan, setPendapatan] = useState([]);
    useEffect(() => {
        axios
            .get("http://choicepos.id:2010/api/v1/transaksi/pemasukan-bulan", {
                headers: {
                    token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1NTQzNzV9.QVbxLN_FedKqnEY9wT-Kz9PR6J0L9ER7c6dtLA-F4xM",
                },
            })
            .then((res) => {
                setPendapatan(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
                                        <th>Bulan</th>
                                        <th>Pendapatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendapatan &&
                                        pendapatan.map((p, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{p.bulan}</td>
                                                    <td>Rp {p.total}</td>

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
