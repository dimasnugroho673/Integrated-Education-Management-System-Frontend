import React, {useState, Fragment, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Ripples from 'react-ripples'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import seo from '../../utils/seo'
import "./LoginStyle.css";

const Login = () => {

    const[username, setUsername]    = useState('');
    const[pass, setPassword]        = useState('');
    const[redirect, setRedirect]    = useState(false);
    const[error, setError]          = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const[isSubmit, setIsSubmit] = useState(false);
    const[loadingProcess, setLoadingProcess] = useState(false);

    useEffect(() => seo({
        title: 'Focus - Login',
        metaDescription: 'With some meta description'
      }), []);

    const token = localStorage.getItem('token')

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
    
            axios.post('http://36.66.35.6:1123/login', data)
            .then(result => {
                localStorage.setItem('token', JSON.stringify(result.data.key))
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

    if (token){
        window.location.href = "/a/dashboard"
    } else {


        return (
            <Fragment>
        <div className="row row-login-parent-section" style={{ maxWidth: '100%' }}>
            <div className="col-md-7 bg-primary ilus-col">
                <h5 className="" style={{ color: '#F4ED40' }}>Learning information system</h5>
                <h1 className="text-white mb-5" style={{ fontWeight : 900, fontSize: 50 }}>Learn anywhere, anytime.</h1>
                <img src={'images/ilus_login.png'} alt="" width="620px" />
            </div>
                                    <div className="col-lg-5 col-sm-7 mx-auto text-left p-5 col-login-right">

                                    <section className="mb-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93">
                                            <g id="Group_99" data-name="Group 99" transform="translate(-1655 -8)">
                                                <path id="Path_83" data-name="Path 83" d="M46.5,0A46.5,46.5,0,1,1,0,46.5,46.5,46.5,0,0,1,46.5,0Z" transform="translate(1655 8)" fill="#3f47f4"/>
                                                <g id="Group_98" data-name="Group 98">
                                                <path id="Subtraction_2" data-name="Subtraction 2" d="M-1979.2,74.438a5.6,5.6,0,0,1-4.124-1.57,5.6,5.6,0,0,1-1.57-4.125V27.864a5.353,5.353,0,0,1,1.387-3.942,5.356,5.356,0,0,1,3.942-1.387h25.112a6.337,6.337,0,0,1,4.088,1.1,4.232,4.232,0,0,1,1.314,3.431,4.139,4.139,0,0,1-1.314,3.358,6.341,6.341,0,0,1-4.088,1.1h-19.2V43.34h4.683A10.077,10.077,0,0,0-1970.107,48a9.964,9.964,0,0,0,.972,4.319h-4.513V68.744a5.727,5.727,0,0,1-1.5,4.162A5.428,5.428,0,0,1-1979.2,74.438Z" transform="translate(3671 8)" fill="#fff"/>
                                                <path id="Path_89" data-name="Path 89" d="M6,0A6,6,0,1,1,0,6,6,6,0,0,1,6,0Z" transform="translate(1704 50)" fill="#47c363"/>
                                                <path id="Path_85" data-name="Path 85" d="M6,0A6,6,0,1,1,0,6,6,6,0,0,1,6,0Z" transform="translate(1709 50)" fill="#f5b62b"/>
                                                <path id="Path_86" data-name="Path 86" d="M6,0A6,6,0,1,1,0,6,6,6,0,0,1,6,0Z" transform="translate(1715 50)" fill="#f24d47"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </section>

                                        <h1 class="" style={{ fontWeight : 900 }}>Sign in and Let's journey.</h1>
                                        <h5 className="text-muted">Welcome back! please sign in with your account.</h5>

                                        {   error && (
                                            <div class="alert alert-danger" role="alert"  style={{marginTop: "20px"}}>
                                            {error}
                                          </div>
                                                    )
                                                }

                                        <form className="mt-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" style={{ fontWeight : 800 }}>NIM</label>
                                                <input type="email" className={ isSubmit == true && username == '' ? 'form-control is-invalid' : 'form-control' } value={username} onChange={onChangeUsername} placeholder="NIM" />
                                                { isSubmit == true && username == '' ? <div class="invalid-feedback">
                                                    NIM cannot empty!
                                                </div> : null }
                                            </div>

                                        
                                            <div class="form-group">
                                                <label for="exampleInputPassword1" style={{ fontWeight : 800 }}>Password</label>

                                                <div class="input-group mb-3"> 
                                                    <input type={ showPassword == true ? 'text' : 'password' }  style={{ borderRight: 'none' }}  className={ isSubmit == true && pass == '' ? 'form-control is-invalid' : 'form-control' } placeholder="Password" value={pass} onChange={onChangePassword}  />

                                                    <div class="input-group-append" title="Show Password">
                                                        <span class="input-group-text bg-semi-white password-show-icon" onClick={handleShowPassword} onMouseOver={changePointer}>
                                                            { showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />  }
                                                        </span>
                                                    </div>

                                                    { isSubmit == true && pass == '' ? <div class="invalid-feedback">
                                                    Password cannot empty!
                                                    </div> : null }

                                                </div>
                                            
                                                {/* <a href="/auth/forgot-password" id="emailHelp" class="form-text text-primary font-weight-bold">Forgot password?</a> */}
                                            </div>

                                            
                                            <Ripples>
                                                <button type="button" className="btn btn-primary buttonload" onClick={submitLogin} style={{ minWidth: '100px', fontWeight: 800 }}> {loadingProcess && (
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