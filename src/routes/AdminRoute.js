import React, { useEffect } from "react";
import { Route } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function AdminRoute({ children, ...rest }) {
  return window.localStorage.getItem("adminToken") ? (
    <Route {...rest} render={() => children} />
  ) : (
    <h1>
      Anda Harus <a href="/login">Login </a>terlebih dahulu sebelum mengakses
      Halaman ini.
    </h1>
  );
}

export default AdminRoute;

// Kak kita punya API yang ada middleware nya untuk cek user dan update user?, karena tanpa API bgini kak nda bisaka pertahankan user di status LOGIN. Fungsi Login bisa, fungsi Logout juga tapi ada beberapa halaman yg seharusnya nda bisa di jangkau user saat nda login seperti profile. nah itu saya mau lindungi tpii nda bisa klo tanpa middleware
