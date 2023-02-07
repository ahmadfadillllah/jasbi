import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProdukModal from './ProdukModal'

export default function ProdukSection() {
    let params = useParams();
    const [produk, setProduk] = useState([]);
    const [id_kategori, setKategori] = useState([]);
    useEffect(() => {
        axios
            .get(
                `http://choicepos.id:2010/api/v1/produk?id_kategori=${params.slug}`,
                {
                    headers: {
                        token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                    },
                    data: {
                        id_produk: 1,
                    },
                }
            )
            .then((res) => {
                console.log(res.data.data[0].dataProduk);
                setProduk(res.data.data[0].dataProduk);
                setKategori(res.data.data[0].id);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function onDelete(id) {
        if (window.confirm("Ingin menghapus produk ini?")) {
            axios
                .delete("http://choicepos.id:2010/api/v1/produk", {
                    headers: {
                        "Content-Type": "application/json",
                        token: "api-pkm eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFCSkd6Q3ZHVXgiLCJ1c2VybmFtZSI6ImFuZGlpcmlhbm4iLCJyb2xlIjoxLCJpYXQiOjE2MzA1Njc5MzV9.m1cdg6ZZSaLPZQGvrnNgHRsxiHremHw7EgVAPe00Yvs",
                    },
                    data: {
                        id_produk: id,
                    },
                })
                .then((res) => {
                    console.log(res);
                    window.location.reload();
                });
        }
    }
    return (
        <div>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Produk</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li className="active">Produk</li>
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
                                <strong className="card-title">Table Produk</strong>
                            </div>

                            <div className="card-body">
                                <ProdukModal id_kategori={id_kategori}/><br></br>
                                <table id="bootstrap-data-table-export" className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Deskripsi</th>
                                            <th>Harga</th>
                                            <th>Satuan</th>
                                            <th>Stok</th>
                                            <th>Gambar</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {produk&&produk.map((item, i) => {
                                            return (
                                                <tr key={i + 1}>
                                                    <td>{i + 1}</td>
                                                    <td>{item.nama}</td>
                                                    <td>{item.deskripsi}</td>
                                                    <td>{item.harga}</td>
                                                    <td>{item.satuan}</td>
                                                    <td>{item.stok}</td>
                                                    <td className="td-actions">
                                                    
                                                        <a
                                                            href={item.img}
                                                            rel="tooltip"
                                                            className="btn btn-secondary btn-sm"
                                                            style={{color:'white'}}
                                                        >
                                                            Lihat
                                                        </a>
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <a
                                                            href={`/produk/edit/${item.id_produk}`}
                                                            type="button"
                                                            rel="tooltip"
                                                            className="btn btn-warning btn-sm"
                                                            style={{color:'white'}}
                                                        >
                                                            Edit
                                                        </a>
                                                        <button
                                                            rel="tooltip"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => onDelete(item.id_produk)}
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
            </div>
        </div>

    )
                                    
}
