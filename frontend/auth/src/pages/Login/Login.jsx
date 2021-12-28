import React, { useState, Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Ripples from 'react-ripples'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import seo from '../../utils/seo'
import "./LoginStyle.css";

const Login = () => {

    const [username, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [loadingProcess, setLoadingProcess] = useState(false);

    useEffect(() => seo({
        title: 'LearningHub - Login',
        metaDescription: 'Login page LearningHub'
    }), []);

    const token = localStorage.getItem('lms-sess-key')

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setError('')
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const changePointer = (e) => {
        e.target.style.cursor = 'pointer'
    }


    const submitLogin = () => {

        setIsSubmit(true);
        setLoadingProcess(true);

        if (username == '' || pass == '') {
            setLoadingProcess(false);
            return false;
        } else {
            const data = {
                nim: username,
                passwd: pass
            }

            // localStorage.setItem('token', 'testing')
            // setRedirect(true)

            axios.post('http://18.136.126.140/api/v1/login', data)
                .then(result => {
                    localStorage.setItem('lms-sess-key', result.data.key)
                    window.location.href = "/a/dashboard"
                })
                .catch(e => {
                    // alert(JSON.stringify(e))
                    setError('Terjadi kesalahan, coba beberapa saat lagi')
                    // setError(e.response.data.error)
                    // console.log(e)
                    // localStorage.setItem('token', 'testing')
                    // setRedirect(true)
                })
        }



    }

    const handleShowPassword = () => {
        if (showPassword == true) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }

    if (token) {
        window.location.href = "/a/dashboard"
    } else {


        return (
            <Fragment>
                <div className="row row-login-parent-section" style={{ maxWidth: '100%' }}>
                    <div className="col-md-7 bg-primary ilus-col">
                        <h5 className="" style={{ color: '#F4ED40' }}>Learning information system</h5>
                        <h1 className="text-white mb-5" style={{ fontWeight: 900, fontSize: 50 }}>Learn anywhere, anytime.</h1>
                        <img src={'images/ilus_login.png'} alt="" width="620px" />
                    </div>
                    <div className="col-lg-5 col-sm-7 mx-auto text-left p-5 col-login-right">

                        <section className="mb-5">
                           <img src="https://previews.dropbox.com/p/thumb/ABaqVcsVkmH2cmUb40BB6_mlUfygByXnBeI4Felffd6PbI7EviMt8iaaMls_yBIk99awvLU99H9JEFpGPrPiwV09vUvz4NMaFI-31LmPLM4WgRS-uEP830trg7ZGeh-yHeXnjnJpU_lilutlOE7-lKGYqXEOCVDf7hj6rn0CSQOW3nUCbZkLX5VdQtcQLbVcEYAAfK5OO-GGt7JNRQEQPPGue68dtSh_RoV_wft5-9RaO5b4I9S80fm0Rk0G41W9rxdGxY9K5l9jtHC9ddQPIJwWqVuRBH_TOMK_VUi1YH-ItfXgJUNAJWqez6AGQXsYgIjiDuCFfP_78E78etEP38-ZGqqvQpAhstmYP4oOKrv3kg/p.png?size=2048x1536&size_mode=3" width="280px" alt="" />
                        </section>

                        <h1 class="" style={{ fontWeight: 900 }}>Sign in and Let's journey.</h1>
                        <h5 className="text-muted">Welcome back! please sign in with your account.</h5>

                        {error && (
                            <div class="alert alert-danger" role="alert" style={{ marginTop: "20px" }}>
                                {error}
                            </div>
                        )
                        }

                        <form className="mt-5" onSubmit={() => submitLogin()}>
                            <div class="form-group">
                                <label for="exampleInputEmail1" style={{ fontWeight: 800 }}>NIM</label>
                                <input type="email" className={isSubmit == true && username == '' ? 'form-control is-invalid' : 'form-control'} value={username} onChange={onChangeUsername} placeholder="NIM" required />
                                {isSubmit == true && username == '' ? <div class="invalid-feedback">
                                    NIM cannot empty!
                                </div> : null}
                            </div>


                            <div class="form-group">
                                <label for="exampleInputPassword1" style={{ fontWeight: 800 }}>Password</label>

                                <div class="input-group mb-3">
                                    <input type={showPassword == true ? 'text' : 'password'} style={{ borderRight: 'none' }} className={isSubmit == true && pass == '' ? 'form-control is-invalid' : 'form-control'} placeholder="Password" value={pass} onChange={onChangePassword} required />

                                    <div class="input-group-append" title="Show Password">
                                        <span class="input-group-text bg-semi-white password-show-icon" onClick={handleShowPassword} onMouseOver={changePointer}>
                                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                        </span>
                                    </div>

                                    {isSubmit == true && pass == '' ? <div class="invalid-feedback">
                                        Password cannot empty!
                                    </div> : null}

                                </div>

                                {/* <a href="/auth/forgot-password" id="emailHelp" class="form-text text-primary font-weight-bold">Forgot password?</a> */}
                            </div>


                            <Ripples>
                                <button type="submit" className="btn btn-primary buttonload" onClick={submitLogin} style={{ minWidth: '100px', fontWeight: 800 }}> {loadingProcess && (
                                    <i
                                        className="fa fa-spinner fa-spin"
                                        style={{ marginRight: "5px" }}
                                    />
                                )} {loadingProcess ? 'Loading' : 'Sign in'} </button>
                            </Ripples>

                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login