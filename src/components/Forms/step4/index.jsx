import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Progressbar from "../../Progressbar";

function Paymentmethod(props) {

    // console.log("////////////////");

    return (
        <>

            <Navbar />
            <Progressbar step={props.step} />


            <div class="product-detailbox">
                <div class="container">
                    <h4 class="select">Select&nbsp; Payment&nbsp; Method</h4>
                    <div class="sections-details">
                        <div class="products">

                            <div class="content">
                                <ul class="con">
                                    <li><a href="" class="active">Credit Card</a></li>
                                    <li><a href="UPI.html">UPI</a></li>
                                    <li>
                                        <a href="Cash on delivery.html">Cash on Delivery</a>
                                    </li>
                                    <li>
                                        <a href="">Net Banking</a>
                                    </li>

                                </ul>
                                <div class="container">
                                    <div class="user-input-box1">
                                        <label for="fullname">Full Name</label>
                                        <input type="text" id="fullname" name="fullname" placeholder="Enter Full Name"
                                            required />
                                    </div>
                                    <div class="user-input-box1">
                                        <label for="phonenumber">Card Number</label>
                                        <input type="number" id="phonenumber" name="phonenumber"
                                            placeholder="Enter card Number" required />
                                    </div>
                                    <div class="cvv">
                                        <label for="month">Month</label><br></br>
                                        <select class="month">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>

                                        <label for="year">Year</label>
                                        <select class="year">
                                            <option value="1">2000</option>
                                            <option value="2">2001</option>
                                            <option value="3">2002</option>
                                        </select>

                                        <label for="month">cvv</label>
                                        <input class="number" type="number"></input>
                                    </div>
                                    <div class="pay">
                                        <button onClick={() => props.handleclick(4)}>Pay ₹1,499 </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="cart-total1">
                            <p>
                                <span>Price (2 item)</span>
                                <span>₹1,499</span>
                            </p>

                            <p>
                                <span>Discount</span>
                                <span>− ₹1,200</span>
                            </p>
                            <p>
                                <span>Delivery Charges</span>
                                <span>Free</span>
                            </p>
                            <p>
                                <span>Total Amount</span>
                                <span>₹299</span>
                            </p>
                            <a href="#">Place to order</a>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Paymentmethod;