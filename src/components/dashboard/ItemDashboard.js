import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ItemDashboard() {
    const [jumlah, setJumlah] = useState(0);
    const [pendapatan, setPendapatan] = useState([]);
    const [total, setTotal] = useState(0);
    const [produk, setProduk] = useState([]);
    useEffect(() => {
        axios
            .get("http://choicepos.id:2010/api/v1/transaksi/pemasukan-tahun", {
                headers: {
                    token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                },
            })
            .then((res) => {
                setPendapatan(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get("http://choicepos.id:2018/api/v1/produk")
            .then((res) => {
                console.log(res.data.data);
                setProduk(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get("http://choicepos.id:2010/api/v1/pelanggan/total", {
                headers: {
                    token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                },
            })
            .then((res) => {
                console.log("jumlah"+res.data.data);
                setJumlah(res.data.data);
            });

    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="stat-widget-five">
                                <div className="stat-icon dib flat-color-1">
                                    <i className="pe-7s-users" />
                                </div>
                                <div className="stat-content">
                                    <div className="text-left dib">
                                        <div className="stat-text">{jumlah}</div>
                                        <div className="stat-heading">Pelanggan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="stat-widget-five">
                                <div className="stat-icon dib flat-color-2">
                                    <i className="pe-7s-cart" />
                                </div>
                                <div className="stat-content">
                                    <div className="text-left dib">
                                        {produk &&
                                            produk.map((p, index) => {
                                                if (index < produk.length) {
                                                    return (
                                                        <div className="stat-text">
                                                            {p.nama} =
                                                            <span className="count"> {p.stok}</span>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        <div className="stat-heading">Produk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="stat-widget-five">
                                <div className="stat-icon dib flat-color-3">
                                    <i className="pe-7s-cash" />
                                </div>
                                <div className="stat-content">
                                    <div className="text-left dib">
                                        {pendapatan &&
                                            pendapatan.map((p) => {
                                                return (
                                                    <div className="stat-text">
                                                        Rp
                                                        <span className="count">{p.total}</span>
                                                    </div>
                                                );
                                            })
                                        }
                                        <div className="stat-heading">Pendapatan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
