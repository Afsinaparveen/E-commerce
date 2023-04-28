import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Progressbar from "../../Progressbar";

function Address(props) {
    return (
        <>

            <Navbar />
            <Progressbar step = {props.step}/>
            <section>
                <div class="select-address-bottom">
                    <div class="container">
                        <h3 class="add">Select a delivery address</h3>
                        <h6 class="new">Add a new address</h6>

                        <form>
                            <div class="form-delivery-box">
                                <div class="left">
                                    <label for="phone">Full name</label><br></br><br></br>
                                    <input type="email" name="phone" ></input><br></br><br></br>
                                    <label>Address</label><br></br><br></br>
                                    <input type="text" name=""></input><br></br><br></br>
                                    <label>Town/City</label><br></br><br></br>
                                    <input type="text" name=""></input><br></br><br></br>
                                </div>
                                <div class="left">
                                    <label for="phone">Mobile number</label><br></br><br></br>
                                    <input type="number" name=""></input><br></br><br></br>
                                    <label>State</label><br></br><br></br>
                                    <input type="text" name=""></input><br></br><br></br>
                                    <label>Pincode</label><br></br><br></br>
                                    <input type="number" name=""></input>
                                </div>
                            </div>

                            <div class="order-address-btn">
                                <a href="#" class=" delivery-order hvr-btn"  onClick={()=>props.handleclick(3)}>Continue</a>
                            </div>
                        </form>

                    </div>
                </div>

            </section>

        </>
    )
}
export default Address;