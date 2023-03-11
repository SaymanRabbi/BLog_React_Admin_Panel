import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    // Login user with email and pass
    const LoginEmailAndPass = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/')
            // ...
        }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card overflow-hidden">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <Link to='/' class="d-block">
                                                    <img src="../../images/logo-light.png" alt="" height="18"/>
                                                </Link>
                                            </div>
                                            <div class="mt-auto">
                                                <div class="mb-3">
                                                    <i class="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div class="carousel-inner text-center text-white pb-5">
                                                        <div class="carousel-item active">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" The theme is really great with an amazing customer support."</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            

                                <div class="col-lg-6">
                                    <div class="p-lg-5 p-4">
                                        <div>
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p class="text-muted">Sign in to continue to Velzon.</p>
                                        </div>

                                        <div class="mt-4">
                                            <form >

                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username</label>
                                                    <input type="text" class="form-control" id="username" placeholder="Enter username" onChange={(e)=>setEmail(e.target.value)}/>
                                                </div>

                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <a href="auth-pass-reset-cover.html" class="text-muted">Forgot password?</a>
                                                    </div>
                                                    <label class="form-label" for="password-input">Password</label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input type={!show?"password" :"text"} class="form-control pe-5 password-input" placeholder="Enter password" id="password-input" onChange={(e)=>setPassword(e.target.value)}/>
                                                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i onClick={()=>setShow(show=>!show)
                                                        } class={`align-middle ${!show? 'ri-eye-fill' :'ri-eye-close-fill'}`}></i></button>
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <button class="btn btn-success w-100" type="submit" onClick={(e)=>LoginEmailAndPass(e)}>Sign In</button>
                                                </div>

                                                                                            </form>
                                        </div>

                                       
                                    </div>
                                </div>
                              
                            </div>
                            
                        </div>
                      
                    </div>
                  

                </div>
               
            </div>
           
        </div>
       
        <footer class="footer start-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    </div>  
    );
};

export default Login;