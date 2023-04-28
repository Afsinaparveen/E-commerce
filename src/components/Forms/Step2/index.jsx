import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import axios from 'axios';
// import { createBrowserHistory } from 'history';
// export const history = createBrowserHistory();

// const handleSubmit = (email, pass) => {
//     const loginPayload = {
//         email: 'eve.holt@reqres.in',
//         password: 'cityslicka'
//     }

//     axios.post("https://reqres.in/api/login", loginPayload)
//         .then(response => {
//             //get token from response
//             const token = response.data.token;

//             //set JWT token to local
//             localStorage.setItem("token", token);

//             //set token to axios common header
//             setAuthToken(token);

//             //redirect user to home page
//             window.location.href = '/'
//         })
//         .catch(err => console.log(err));
// };

// export const setAuthToken = token => {
//     if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//     else
//         delete axios.defaults.headers.common["Authorization"];
// }
// const token = localStorage.getItem("token");
// if (token) {
//     setAuthToken(token);
// }
function login() {


    return (
        <>
            <Header />
            <Navbar />

            <div class="container">
                <div class="main-form">
                    <form method="get">
                        <section class="signup-section sp-pd-t">
                            <div class="container">
                                <div class="sign-up-box">

                                    <div class="sign-up-bottom">
                                        <h3>Login</h3>
                                        <form>
                                            <div class="sign-form-box">
                                                <div class="sign-form-box-left">
                                                    <label for="phone">Email or mobile phone number</label><br></br><br></br>
                                                    <input type="email" name="phone"></input><br></br><br></br>
                                                    <input type="checkbox" id="checkbox"></input>
                                                    <label for="phone">Remember Me </label><br></br><br></br>
                                                </div>
                                                <div class="sign-form-box-right">
                                                    <label for="phone">Password</label><br></br><br></br>
                                                    <input type="password" name="phone"></input><br></br><br></br>
                                                </div>
                                            </div>
                                            <p class="para">By continuing, you agree to shop indeed Conditions of Use and <a href="#">privacy
                                                Notice.</a></p>
                                            <input type="submit" id="continue-btn" value="Login"></input><br></br><br></br>
                                            <p class="red-text">Need Help</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default login;