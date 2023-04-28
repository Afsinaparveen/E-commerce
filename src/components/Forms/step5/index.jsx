import React from "react";
import { useState } from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Progressbar from "../../Progressbar";

function Completepayment(props) {
    return (
        <>
            <Navbar />
            <Progressbar step = {props.step}/>

        <div class="product-detailbox">
            <div class="container">
                <h4 class="select1">Complete payment</h4>
                <div class="complete">
                    <img src="images/icon1.png"></img>
                    <div class="orderplaced">
                        <h4>Order placed thank you</h4>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h2>Delivery by August 18, 2022</h2>
                    <h1>Review or edit your recent order</h1>
                    <button>Continue Shopping</button>
                </div>
            </div>
        </div>

        </>
    )
}
export default Completepayment;