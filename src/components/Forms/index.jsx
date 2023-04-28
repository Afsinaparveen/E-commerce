import React from "react";
import { useState } from "react";
import Step1 from './Step1/index';
import Step2 from './Step2/index'
import Step3 from './Step3/index'
import Step4 from './step4/index'
import Step5 from './step5/index'
import Header from "../Header";
import Footer from "../Footer";
import Progressbar from "../Progressbar";
import Offers from "../offers";
import Formcontent from "../footercontent";




function Main() {

    const [data, setData] = useState({ email: " " });

    const [step, setStep] = useState(1);

    function changedata(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function handleclick(e) {
        setStep(e)
    }


    return (
        <>
            <Header />
            <div>
                {step === 1 && <Step1 handleclick={handleclick} changedata={changedata} />}
                {step === 2 && <Step3 step={step} handleclick={handleclick} />}
                {step === 3 && <Step4 step={step} handleclick={handleclick} />}
                {step === 4 && <Step5 step={step} />}
                {/* <Progressbar />
                <Offers />
                <Formcontent /> */}
            </div>
            <Footer />
        </>
    )
}


export default Main;


