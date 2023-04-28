import React from "react";
import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import { WATCHES } from "../../utils";
import { WATCH } from "../../utils";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Offerdetails() {

    const [details, setdetails] = useState();
    const [detailsdata, setdetailsdata] = useState([]);
    const [products, setproducts] = useState();

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const detailslist = async () => {
            const idValue = searchParams.get('id');

            const response = await axios.post(`https://firestore.googleapis.com/v1/projects/e-commerce-5d6b7/databases/(default)/documents:runQuery`,
                {
                    structuredQuery:
                    {
                        from: [
                            {
                                collectionId: 'products'
                            }
                        ],
                        where: {
                            compositeFilter: {
                                filters: [
                                    {
                                        fieldFilter: {
                                            field: {
                                                fieldPath: 'id'
                                            },
                                            op: 'EQUAL',
                                            value: {
                                                stringValue: `${idValue}`

                                            }
                                        }
                                    }
                                ], op: 'AND'
                            }
                        },
                    },
                },
            )
            const data = response?.data
            console.log({ '*******detaile data*****': data });
            setdetails(data?.documents)
            setdetailsdata(data)

        }
        detailslist()
    }, [])


    return (
        <>
            <Header />
            <Navbar />
            {console.log('detailsdata[0]', detailsdata[0]?.document?.fields?.image?.arrayValue?.values[0]?.stringValue)}

            <div class="product-detailbox">
                <div class="container">
                    <div class="sections-details">
                        <div class="first-section">
                            <div class="main-fig">
                                <img src={detailsdata[0]?.document?.fields?.image?.arrayValue?.values[0]?.stringValue}></img>
                            </div>
                            <div class="discount-items1">
                                {WATCHES.map((item) => {
                                    return <div class="watch1">
                                        <img src={item.image}></img>
                                    </div>
                                })}
                            </div>
                            <div class="details">
                                <p>Product Ratings & Reviews</p>

                                <p class="rating">4.1 based on *** reviews</p>

                                <div class="row">
                                    <div class="side">
                                        <div>5 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-5"></div>
                                        </div>
                                    </div>
                                    <div class="side-right">
                                        <div>150</div>
                                    </div>
                                    <div class="side">
                                        <div>4 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-4"></div>
                                        </div>
                                    </div>
                                    <div class="side-right">
                                        <div>63</div>
                                    </div>

                                    <div class="side">
                                        <div>3 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-3"></div>
                                        </div>
                                    </div>
                                    <div class="side-right">
                                        <div>50</div>
                                    </div>

                                    <div class="side">
                                        <div>2 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-2"></div>
                                        </div>
                                    </div>
                                    <div class="side-right">
                                        <div>15</div>
                                    </div>
                                    <div class="side">
                                        <div>1 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-1"></div>
                                        </div>
                                    </div>
                                    <div class="side-right">
                                        <div>10</div>
                                    </div>
                                </div>
                                <div class="people-review">
                                    <img src="images/rating1.png"></img>
                                </div>
                                <div class="review-fig1">
                                    <img src="images/reviewfig1.png"></img>
                                </div>
                                <div class="people-review">
                                    <img src="images/rating2.png"></img>
                                </div>
                                <div class="review-fig1">
                                    <img src="images/reviewfig2.png"></img>
                                    <div class="name">
                                        <img src="images/name1.png"></img>
                                    </div>
                                </div>
                                <div class="people-review">
                                    <img src="images/reviewfig3.png"></img>
                                </div>
                                <div class="review-fig1">
                                    <img src="images/rating3.png"></img>
                                </div>
                                <div class="name-1">
                                    <img src="images/name1.png"></img>
                                </div>
                            </div>
                        </div>
                        <div class="second-section">
                            <div class="one-para">
                                <h3>{detailsdata[0]?.document?.fields?.description?.stringValue}</h3>
                            </div>
                            <div class="second-para">
                                <h2>{detailsdata[0]?.document?.fields?.offer?.stringValue}</h2>
                            </div>
                            <div class="third-para">
                                <p>color</p>
                            </div>
                            <div class="discount-items1">
                                <div class="section-8">
                                    <img src="images/v1.png"></img>
                                </div>
                                <div class="section-9">
                                    <img src="images/v2.png"></img>
                                </div>
                                <div class="section-10">
                                    <img src="images/v3.png"></img>
                                </div>
                                <div class="section-11">
                                    <img src="images/v4.png"></img>
                                </div>
                                <div class="section-12">
                                    <img src="images/v5.png"></img>
                                </div>
                            </div>
                            <div class="fourth-para">
                                <h4>Brand Fossil</h4>
                                <p>Model Number FTW4068
                                    Special Feature GPS, Heart Rate Monitor
                                    Water Resistance Level Water Resistant
                                    Band Colour Multicolor</p>
                                <h3>Product Details</h3>
                                <ul>
                                    <li>Model Number FTW4068</li>
                                    <li>Smartwatches powered with Wear OS by Google work with iPhone</li>
                                    <li>and Android Phones
                                        Extend your battery life for multiple days with new, smart battery </li>
                                    <li>modes</li>
                                    <li>Case size: 44mm; Band size: 22mm; interchangeable with Fossil 22mm bands; Screen
                                        Size: 1.28" Color AMOLED / 416 x 416 / 326pp</li>
                                    <li>resolution; touchscreen functionality;
                                        Warranty type:Manufacturer; 1 Year International Warranty</li>
                                </ul>
                                <p class="pppp">Usually delivered in 7 days?
                                    Enter pincode for exact delivery dates/charges
                                    View Details</p>
                            </div>
                            <div class="buttons">
                                <button>Add To Cart</button>
                                <button class="button2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd section starts */}


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
                                </p>
                                <h5> {items.content2}</h5>


                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Offerdetails;
