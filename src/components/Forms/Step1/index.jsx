import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useState } from "react";


  
function Signup(props) {


    return (

        <>
            <Navbar />
            <div class="container">
                <div class="main-form">
                    <h1 class="form-title">Sign up</h1>
                    <form action="#">
                        <div class="main-user-info">
                            <div class="user-input-box">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" onChange={props.changeData} placeholder="Enter Email" required />
                            </div>
                            <div class="user-input-box">
                                <label for="phonenumber">Phone Number</label>
                                <input type="number" id="phonenumber" name="phonenumber"  onChange={props.changeData} placeholder="Enter Phone Number"
                                    required />
                            </div>
                            <div class="user-input-box">
                                <label for="fullname">Full Name</label>
                                <input type="text" id="fullname" name="fullname"  onChange={props.changeData}  placeholder="Enter Full Name" required />
                            </div>
                            <div class="user-input-box">
                                <label for="username">Last Name</label>
                                <input type="text" id="username" name="username"  onChange={props.changeData} placeholder="Enter Last Name" required />
                            </div>
                            <div class="user-input-box">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password"  onChange={props.changeData} placeholder="Enter Password"
                                    required />
                            </div>
                            <div class="user-input-box">
                                <label for="confirmpassword">Confirm Password</label>
                                <input type="password" id="confirmpassword" name="confirmpassword" onChange={props.changeData}
                                    placeholder="Confirm Password"  required />
                            </div>
                        </div>
                        <p class="privacy">By continuing, you agree to shop indeedConditions of Use and <a href="#">privacy Notice.</a> </p>
                        <div class="form-submit-btn">
                            <input type="submit" value="Continue" onClick={()=>props.handleclick(2)}></input>
                            <input class="need" type="submit" value="Need Help"></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;