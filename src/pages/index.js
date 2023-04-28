import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Body from '../components/Body';
import Progressbar from "../components/Progressbar";
import Offers from "../components/offers";
function index() {
    return (
        <>
            <Header />
            <Navbar />
            <Body />
            <Footer />
        </>
    )
}

export default index;
