import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function OrderDetailSection() {
    let params = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios
            .get(
                `http://choicepos.id:2010/api/v1/transaksi?id_transaksi=${params.slug}`,
                {
                    headers: {
                        token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                    },
                    data: {
                        id_transaksi: params.slug,
                    },
                }
            )
            .then((res) => {
                console.log(res.data.data[0].detail_transaksi);
                setDetail(res.data.data[0].detail_transaksi);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Detail Order</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li className="active">Detail Order</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="animated">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Table Detail Order</strong>
                                </div>
                                <div className="card-body">
                                    <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Jumlah</th>
                                                <th>Total</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {detail &&
                                                detail.map((d, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{d.nama}</td>
                                                            <td>{d.jumlah}</td>
                                                            <td>{d.harga}</td>
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
            </div>
        </div>
    )
}
