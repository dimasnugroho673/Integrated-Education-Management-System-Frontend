import React, {useState, Fragment} from 'react';
// import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Ripples from 'react-ripples'
import "./ForgotPasswordStyle.css";

const Login = () => {

    const[username, setUsername]    = useState('');
    const[pass, setPassword]        = useState('');
    const[redirect, setRedirect]    = useState(false);
    const[error, setError]          = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const[isSubmit, setIsSubmit] = useState(false);

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

    const submitLogin = () => {

        setIsSubmit(true);

        if (username == '' || pass == '') {
            return false;
        } else {
            const data = {
                email: username,
                password: pass
            }
    
            // localStorage.setItem('token', 'testing')
            // setRedirect(true)
    
            axios.post('https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt', data)
            .then(result => {
                if (result){
                    localStorage.setItem('token', result.data)
                    setRedirect(true)
                }
            })
            .catch(e => {
                setError(e.response.data.error)
                localStorage.setItem('token', 'testing')
                setRedirect(true)
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
        // if token exist
        // return <Redirect to="/a/dashboard" />
        window.location.href = "/a/dashboard"
    } else {
        return (
            <Fragment>

                    <div className="row" style={{minHeight: "100vh"}}>
                        <div className="col-md-5 bg-primary mx-auto">
                            <div className="centered">

                            <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="550"viewBox="0 0 518.262 352.973">
  <defs>
    <filter id="Polygon_8" x="49.575" y="69.322" width="358.015" height="238.328" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Polygon_6" x="97.667" y="67.486" width="345" height="216" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Polygon_7" x="118.072" y="0" width="400.19" height="352.973" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-3"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Union_5" x="256.525" y="44.979" width="161.342" height="226.998" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3.5" result="blur-4"/>
      <feFlood flood-opacity="0.373"/>
      <feComposite operator="in" in2="blur-4"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_437" x="0" y="181.978" width="291" height="69" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3.5" result="blur-5"/>
      <feFlood flood-opacity="0.282"/>
      <feComposite operator="in" in2="blur-5"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_97" data-name="Group 97" transform="translate(-684.634 50.761)">
    <g id="Group_96" data-name="Group 96">
      <g transform="matrix(1, 0, 0, 1, 684.63, -50.76)" filter="url(#Polygon_8)">
        <path id="Polygon_8-2" data-name="Polygon 8" d="M144.223,23.345a25,25,0,0,1,38.554,0L293.211,157.082c13.463,16.3,1.866,40.918-19.277,40.918H53.066c-21.143,0-32.74-24.615-19.277-40.918Z" transform="matrix(1, -0.07, 0.07, 1, 58.58, 98.13)" fill="rgba(245,182,43,0.75)"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 684.63, -50.76)" filter="url(#Polygon_6)">
        <path id="Polygon_6-2" data-name="Polygon 6" d="M144.223,23.345a25,25,0,0,1,38.554,0L293.211,157.082c13.463,16.3,1.866,40.918-19.277,40.918H53.066c-21.143,0-32.74-24.615-19.277-40.918Z" transform="translate(106.67 73.49)" fill="rgba(255,124,119,0.72)"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 684.63, -50.76)" filter="url(#Polygon_7)">
        <path id="Polygon_7-2" data-name="Polygon 7" d="M144.223,23.345a25,25,0,0,1,38.554,0L293.211,157.082c13.463,16.3,1.866,40.918-19.277,40.918H53.066c-21.143,0-32.74-24.615-19.277-40.918Z" transform="translate(226.07 6) rotate(30)" fill="rgba(99,214,162,0.75)"/>
      </g>
    </g>
    <g transform="matrix(1, 0, 0, 1, 684.63, -50.76)" filter="url(#Union_5)">
      <path id="Union_5-2" data-name="Union 5" d="M50.841,184.979A12.592,12.592,0,1,1,63.432,197.63,12.622,12.622,0,0,1,50.841,184.979Zm1.405-32.528-.043,0a32.889,32.889,0,0,1-.94-8.341q0-14.2,4.015-24.51a55.81,55.81,0,0,1,9.5-15.67q4.817-5.76,17.329-16.808T98.364,69.511a28.412,28.412,0,0,0,3.747-14.331q0-14.063-10.973-24.71t-26.9-10.648q-15.388,0-25.692,9.643T25.036,59.6l-.045,0c-.625,5.952-5.967,10.6-12.465,10.6C5.608,70.2,0,64.927,0,58.426a11.1,11.1,0,0,1,.464-3.184Q4.055,28.818,20.152,14.6,36.678,0,63.841,0q28.77,0,45.9,15.67t17.127,37.9a48.041,48.041,0,0,1-6.021,23.706q-6.022,10.848-23.551,26.384-11.775,10.447-15.388,15.4a34.343,34.343,0,0,0-5.352,11.384c-.916,3.388-1.205,14.52-1.628,19,0,.107,0,.214,0,.321a11.493,11.493,0,0,1-22.683,2.679Z" transform="matrix(1, 0.07, -0.07, 1, 280.81, 52.48)" fill="#f9f9f9"/>
    </g>
    <g id="Group_95" data-name="Group 95">
      <g transform="matrix(1, 0, 0, 1, 684.63, -50.76)" filter="url(#Rectangle_437)">
        <rect id="Rectangle_437-2" data-name="Rectangle 437" width="270" height="48" rx="8" transform="translate(7.5 189.48)" fill="#f9f9f9"/>
      </g>
      <path id="Path_95" data-name="Path 95" d="M1.813-33.9l1.3-4.021a43.525,43.525,0,0,1,6.542,2.747q-.538-5.126-.566-7.052H13.2q-.085,2.8-.651,7.023a49.066,49.066,0,0,1,6.684-2.719l1.3,4.021a35.253,35.253,0,0,1-7.052,1.586,47.345,47.345,0,0,1,4.871,5.353l-3.4,2.407a70.31,70.31,0,0,1-3.88-6.089,45.655,45.655,0,0,1-3.682,6.089L4.05-26.961a58.855,58.855,0,0,1,4.7-5.353Q5.1-33.021,1.813-33.9Z" transform="translate(709.134 195.717)" fill="#3f47f4"/>
      <path id="Path_96" data-name="Path 96" d="M1.813-33.9l1.3-4.021a43.525,43.525,0,0,1,6.542,2.747q-.538-5.126-.566-7.052H13.2q-.085,2.8-.651,7.023a49.066,49.066,0,0,1,6.684-2.719l1.3,4.021a35.253,35.253,0,0,1-7.052,1.586,47.345,47.345,0,0,1,4.871,5.353l-3.4,2.407a70.31,70.31,0,0,1-3.88-6.089,45.655,45.655,0,0,1-3.682,6.089L4.05-26.961a58.855,58.855,0,0,1,4.7-5.353Q5.1-33.021,1.813-33.9Z" transform="translate(735.134 195.717)" fill="#3f47f4"/>
      <path id="Path_97" data-name="Path 97" d="M1.813-33.9l1.3-4.021a43.525,43.525,0,0,1,6.542,2.747q-.538-5.126-.566-7.052H13.2q-.085,2.8-.651,7.023a49.066,49.066,0,0,1,6.684-2.719l1.3,4.021a35.253,35.253,0,0,1-7.052,1.586,47.345,47.345,0,0,1,4.871,5.353l-3.4,2.407a70.31,70.31,0,0,1-3.88-6.089,45.655,45.655,0,0,1-3.682,6.089L4.05-26.961a58.855,58.855,0,0,1,4.7-5.353Q5.1-33.021,1.813-33.9Z" transform="translate(761.134 195.717)" fill="#3f47f4"/>
      <path id="Path_98" data-name="Path 98" d="M1.813-33.9l1.3-4.021a43.525,43.525,0,0,1,6.542,2.747q-.538-5.126-.566-7.052H13.2q-.085,2.8-.651,7.023a49.066,49.066,0,0,1,6.684-2.719l1.3,4.021a35.253,35.253,0,0,1-7.052,1.586,47.345,47.345,0,0,1,4.871,5.353l-3.4,2.407a70.31,70.31,0,0,1-3.88-6.089,45.655,45.655,0,0,1-3.682,6.089L4.05-26.961a58.855,58.855,0,0,1,4.7-5.353Q5.1-33.021,1.813-33.9Z" transform="translate(784.134 195.717)" fill="#3f47f4"/>
      <path id="Path_99" data-name="Path 99" d="M0,0V32" transform="translate(817.634 146.717)" fill="none" stroke="#3f47f4" stroke-width="3"/>
    </g>
  </g>
</svg>



                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="container text-left">

                            <section className="m-section-login-form" style={{ verticalAlign: 'middle' }}>
                                <div className="row">
                                    <div className="col-md-8 mx-auto">

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
                                    


                                        <h1 class="" style={{ fontWeight : 700 }}>Enter your email.</h1>
                                        <h5 className="text-muted">We'll send your recovery link.</h5>

                                        {   error && (
                                                        <p style={{color: "red", marginTop: "20px"}}>{error}</p>
                                                    )
                                                }

                                        <form className="mt-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className={ isSubmit == true && username == '' ? 'form-control is-invalid' : 'form-control' } value={username} onChange={onChangeUsername} placeholder="Email address" />
                                                { isSubmit == true && username == '' ? <div class="invalid-feedback">
                                                    Email cannot empty!
                                                </div> : null }
                                            </div>

                                            <div class="form-group">
                                                <a href="/auth/login" id="emailHelp" class="form-text text-primary font-weight-bold">Remember your account? Sign in.</a>
                                            </div>

                                            <Ripples>
                                                <button type="button" className="btn btn-primary"  onClick={submitLogin} style={{ minWidth: '100px' }}>Send mail</button>
                                            </Ripples>
                                            
                                        </form>
                                    </div>
                                </div>
                            </section>

                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }

    

}

export default Login