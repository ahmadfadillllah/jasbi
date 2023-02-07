import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
      let data = {
        username: email,
        password: password,
      };
      await axios
        .post("http://choicepos.id:2018/api/v1/auth/login", data)
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("adminToken", res.data.token);
          history.push("/dashboard");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Username atau Password salah");
        });
    }
    return (
        <div>
            <div className="bg-dark" style={{ height: 984 }}>
                <div className="sufee-login d-flex align-content-center flex-wrap">
                    <div className="container">
                        <div className="login-content">
                            <div className="login-logo">
                                <a href="index.html">
                                    <img className="align-content" src="images/logo.png" alt />
                                </a>
                            </div>
                            <div className="login-form">
                                <form onSubmit={handleSubmit} >
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                        </label>

                                    </div>
                                    <button type="submit" value="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
