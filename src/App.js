import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Dashboard from 'pages/Dashboard';
import DetailOrder from 'pages/DetailOrder';
import Produk from 'pages/Produk';
import EditProduk from 'pages/EditProduk';
import Kategori from 'pages/Kategori';
import EditKategori from 'pages/EditKategori';
import Pelanggan from 'pages/Pelanggan';
import LaporanPerbulan from 'pages/LaporanPerbulan';
import LaporanPertahun from 'pages/LaporanPertahun';
import Login from 'pages/Login';
import { ToastContainer } from "react-toastify";
import AdminRoute from 'routes/AdminRoute';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <AdminRoute exact path="/produk/edit/:slug" component={EditProduk} /> 
        <AdminRoute exact path="/produk/:slug" component={Produk} /> 
        <AdminRoute exact path="/kategori/edit/:slug" component={EditKategori} /> 
        <AdminRoute exact path="/kategori/" component={Kategori} /> 
        <AdminRoute exact path="/pelanggan/" component={Pelanggan} /> 
        <AdminRoute exact path="/laporan/" component={LaporanPertahun} /> 
        <AdminRoute exact path="/laporan/perbulan" component={LaporanPerbulan} /> 
        <Route exact path="/" component={Login} /> 
        <AdminRoute exact path="/dashboard" component={Dashboard} />
        <AdminRoute exact path="/detail/:slug" component={DetailOrder} />    

        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
