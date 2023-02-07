import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Order() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getAllHistory();
    }, []);

    async function getAllHistory() {
        await axios
            .get("http://choicepos.id:2010/api/v1/transaksi", {
                headers: {
                    token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                },
            })
            .then((res) => {
                console.log(res);
                setUser(res.data.data);
            });
    }
    function handleCheck(_idtransaksi) {
        //
        if (window.confirm("Apakah orderan ini sudah selesai?")) {
            let dataid = {
                id_transaksi: _idtransaksi,
            };
            axios
                .put(
                    "http://choicepos.id:2010/api/v1/transaksi/status-pengiriman",
                    dataid,
                    {
                        headers: {
                            token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    window.location.reload();

                    toast.success("Orderan selesai!");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <strong className="card-title">Table Order</strong>
                        </div>
                        <div className="card-body">
                            <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th width="50">No</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>No.Hp</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Pembayaran</th>
                                        <th>Detail</th>
                                        <th width="100">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user &&
                                        user.map((u, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{u.nama}</td>
                                                    <td>{u.alamat}</td>
                                                    <td>{u.nohp}</td>
                                                    <td>{u.total_transaksi}</td>
                                                    {u.metode === 0 && (
                                                        <td className="">
                                                            {" "}
                                                            <span className="badge badge-pill badge-primary">
                                                                TRANSFER
                                                            </span>
                                                        </td>
                                                    )}
                                                    {u.metode === 1 && (
                                                        <td className="">
                                                            {" "}
                                                            <span className="badge badge-pill badge-secondary">COD</span>
                                                        </td>
                                                    )}

                                                    {u.metode === null && (
                                                        <td className="">
                                                            {" "}
                                                            <span className="badge badge-pill badge-danger">NULL</span>
                                                        </td>
                                                    )}
                                                    {u.status_pembayaran === 0 && (
                                                        <td>
                                                            <span className="badge badge-pill badge-warning">
                                                                Menunggu Pembayaran
                                                            </span>
                                                        </td>
                                                    )}
                                                    {u.status_pembayaran === 1 && (
                                                        <td>
                                                            <span className="badge badge-pill badge-success">
                                                                Telah Dibayar
                                                            </span>
                                                        </td>
                                                    )}
                                                    {u.status_pembayaran === 2 && (
                                                        <td>
                                                            <span className="badge badge-pill badge-info">
                                                                Pending Kartu Kredit
                                                            </span>
                                                        </td>
                                                    )}
                                                    {u.status_pembayaran === 3 && (
                                                        <td>
                                                            <span className="badge badge-pill badge-danger">Expire</span>
                                                        </td>
                                                    )}

                                                    {u.status_pembayaran === 4 && (
                                                        <td>
                                                            <span className="badge badge-pill badge-warning">
                                                                Pending..
                                                            </span>
                                                        </td>
                                                    )}


                                                    <td className="td-actions">
                                                        <a
                                                            href={`/detail/${u.id_transaksi}`}
                                                            type="button"
                                                            rel="tooltip"
                                                            className="btn btn-info btn-sm"
                                                        >
                                                            Detail
                                                        </a>
                                                    </td>
                                                    {u.status_pengiriman === 1 && (
                                                        <td className="td-actions text-right">
                                                            <span className="badge badge-pill badge-success">Selesai</span>
                                                        </td>
                                                    )}
                                                    {u.status_pengiriman === 0 && (
                                                        <td className="td-actions text-right">
                                                            <a
                                                                type="button"
                                                                rel="tooltip"
                                                                className="btn btn-primary btn-sm"
                                                                onClick={() => handleCheck(u.id_transaksi)}
                                                                style={{color:"white"}}
                                                            >
                                                                Konfirmasi
                                                            </a>
                                                        </td>
                                                    )}
                                                    {u.status_pengiriman === 2 && (
                                                        <td className="td-actions text-right">
                                                            <span className="badge badge-pill badge-danger">Dibatalkan</span>
                                                        </td>
                                                    )}
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
