import React, { Component } from "react";
import { login } from "./UserFunctions";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Employes from "./Employes";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'  
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  validate = () => {
    
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Email invalide";
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Email  invalide',
      // })
    }
    if (!this.state.email) {
      emailError = "Email vide";
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Email vide',
      // })
    }
    if (!this.state.password) {
      passwordError = "Mot de passe vide";
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Mot de passe vide',
      
      // })
    }
   
    if (emailError || passwordError) {
    
      this.setState({ emailError, passwordError });
      
      Swal.fire({
        icon: 'error',
        // title: passwordError,
        imageHeight: 40,
        html: "<h3>"+emailError+"</h3><br /><h3>"+passwordError+"</h3>",
      
      
        
      })
  
      return false;
      
    }
    return true;
  };
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    const isValide = this.validate();
    if (isValide) {
      login(user).then(res => {
        console.log('rres',res)
        if (res) {
            console.log("login ok")
            this.props.history.push('/')
            // this.context.history.push('/path')
        }
    })
    } 
  }

  render() {
    // console.log('history',this.props.)
    return (
      <div class="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <p href="../../index2.html">
              <b>Easy leave</b> V1.1
            </p>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div style={{fontSize: 12, color:'red'}}>{this.state.emailError}</div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    // value={this.state.password}
                    className="form-control"
                    placeholder="Password"
                    onChange={this.onChange}
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div style={{fontSize: 12, color:'red'}}>{this.state.passwordError}</div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>

              <p className="mb-0">
                <Link to="/register" className="text-center">
                  Enregistrer
                </Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>

      //             <form noValidate onSubmit={this.onSubmit}>
      //
      //
      //                     <input
      //                         type="email"
      //                         className="form-control"
      //                         name="email"
      //                         placeholder="Enter email"
      //                         value={this.state.email}
      //                         onChange={this.onChange}
      //                     />
      //                 </div>
      //                 <div className="form-group">
      //                     <label htmlFor="password">Password</label>
      //                     <input
      //                         type="password"
      //                         className="form-control"
      //                         name="password"
      //                         placeholder="Password"
      //                         value={this.state.password}
      //                         onChange={this.onChange}
      //                     />
      //                 </div>
      //                 <button
      //                     type="submit"
      //                     className="btn btn-lg btn-primary btn-block"
      //                 >
      //                     Sign in
      //                 </button>
      //             </form>
      //
    );
  }
}

export default Login;
