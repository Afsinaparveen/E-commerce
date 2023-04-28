import React from "react";
import { useState, useEffect } from "react";
import { OFFERS } from "../../utils";
import { DISCOUNTITEMS } from "../../utils";
import { DEALS } from "../../utils";
import { RECENTLYVIEWED } from "../../utils";
import { TOPBRAND } from "../../utils";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




function Body() {
    const [products, setproducts] = useState();

    useEffect(() => {
        const productFetch = async () => {
            const response = await fetch(`https://firestore.googleapis.com/v1/projects/e-commerce-5d6b7/databases/(default)/documents/products`);
            const data = await response.json();
            setproducts(data?.documents)
        }
        productFetch()
    }, [])
    return (
        <>

            <div class="section">
                <Carousel>
                    <div className="slide1">
                        <img src="images/banner.png" />
                        <div class="container">
                            <div class="sec">
                                <div class="paragraphs">
                                    <h2>Starting 99</h2>
                                    <p>customer most loved home range</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide1">
                        <img src="images/banner.png" />
                        <div class="container">
                            <div class="sec">
                                <div class="paragraphs">
                                    <h2>Starting 99</h2>
                                    <p>customer most loved home range</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide1">
                        <img src="images/banner.png" />
                        <div class="container">
                            <div class="sec">
                                <div class="paragraphs">
                                    <h2>Starting 99</h2>
                                    <p>customer most loved home range</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


            <div class="sections">
                <div class="container">
                    <div class="heading">
                        <h4>Top Offer</h4>
                    </div>

                    <div class="discount-items">
                        <div class="discount-items-section">

                            {OFFERS.map((item) => {
                                return <div class="sections-1">
                                    <img class="img1" src={item.image}></img>
                                    <p class>{item.title}</p>
                                    <h3>{item.content}</h3>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div class="sections">
                <div class="container">
                    <div class="heading1">
                        <h4>Deals on Top Brand</h4>
                    </div>
                    <div class="discount-items">

                        {products && products?.length != 0 && products.map((items) => {
                            console.log("*******************");

                            return <div class="sections-2">
                                <img src={items?.fields?.image?.arrayValue?.values[0]?.stringValue}></img>
                                <p>{items?.fields?.text?.stringValue}</p>
                                <h5>{items?.fields?.offer?.stringValue}</h5>
                                <p>{items?.fields?.description?.stringValue?.value}</p>
                            </div>
                        })}
                    </div>
                    {/* <div class="discount-items">

                        {DEALS.map((items) => {
                            return <div class="sections-2">
                                <img src={items.image}></img>
                                <p>
                                    {items.title}
                                    {items.content1}
                                    {items.content2}
                                </p>

                            </div>
                        })}
                    </div> */}
                </div>
            </div>
            {/* <div class="sections">
                <div class="container">
                    <div class="heading2">
                        <h4>Recently Viewed Brand</h4>
                    </div> */}
            {/* <div class="discount-items">

                        {RECENTLYVIEWED.map((items) => {
                            return <div class="sections-2">
                                <img src={items.image}></img>
                                <p>
                                    {items.title}
                                    {items.content1}
                                    {items.content2}
                                </p>

                            </div>
                        })}
                    </div> */}

            {/* 
                </div>
            </div> */}
            {/* <div class="sections">
                <div class="container">
                    <div class="heading1">
                        <h4>Deals on Top Brand</h4>
                    </div> */}
            {/* <div class="discount-items">

                        {TOPBRAND.map((items) => {
                            return <div class="sections-2">
                                <img src={items.image}></img>
                                <p>
                                    {items.title}
                                    {items.content1}
                                    {items.content2}
                                </p>

                            </div>
                        })}
                    </div> */}
            {/* </div>
            </div> */}
            <div class="sections">
                <div class="container">
                    <div class="heading8">
                        <h4><a>View All</a></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;