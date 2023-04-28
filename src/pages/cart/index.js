import React from "react";
import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import { WATCH } from "../../utils";

function details() {
    
    return (
    <>
    
        <Header />
        <Navbar />
        <div class="product-detailbox">
            <div class="container">
                <div class="sections-details">
                    <div class="products">
                        <div class="product">
                            <img src="images/cartwatch1.png"></img>
                            <div class="product-info">
                                <p class="product-num">Price (1 item)</p>
                                <h3 class="product-name">Hala 2022 HL-2022-DTL Digital Watch - For Men</h3>
                                <h2 class="product-price">₹ 1,499</h2>
                                <h2 class="product-offer">50% off</h2>
                                <p class="product-quantity">Qnt:
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </p>
                                <p class="product-remove">
                                    <i class="fa-solid fa-trash"></i>
                                    <span class="remove">Remove</span>
                                </p>
                            </div>
                        </div>
                        <div class="product">
                            <img src="images/mancart.png"></img>
                            <div class="product-info">
                                <p class="product-num">Price (1 item)</p>
                                <h3 class="product-name">Printed Men Round Neck Dark Blue T-Shirt</h3>
                                <h2 class="product-price">₹ 492 </h2>
                                <h2 class="product-offer">50% off</h2>
                                <p class="product-quantity">Qnt:
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </p>
                                <p class="product-remove">
                                    <i class="fa-solid fa-trash"></i>
                                    <span class="remove">Remove</span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="cart-total">
                        <p>
                            <span>Total price</span>
                            <span>₹ 2000</span>
                        </p>

                        <p>
                            <span>Number of items</span>
                            <span>2</span>
                        </p>
                        <p>
                            <span>Delivery charges</span>
                            <span>Free</span>
                        </p>
                        <p>
                            <span>You save</span>
                            <span>₹ 1000</span>
                        </p>
                        <a href="#">Place to order</a>

                    </div>

                </div>
            </div>

        </div>

        {/* <!-- third section starts --> */}
        <div class="sections">
            <div class="container">
                <div class="heading1">
                    <h4>SIMILAR PRODUCTS</h4>
                </div>
                <div class="discount-items">

                    {WATCH.map((items) => {
                        return <div class="sections-2">
                            <img src={items.image}></img>
                            <p>
                                {items.title}
                                {items.content1}
                                {items.content2}
                            </p>

                        </div>
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default details;