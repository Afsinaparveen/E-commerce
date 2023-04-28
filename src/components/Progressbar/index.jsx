import React from "react";
import { useState } from "react";
import {PROGRESSBAR} from "../../utils"

function Progressbar(props){
return(
    <>
    <section class="select-address-section sp-pd-t">
                <div class="container">
                    <div class="sub-bar-box">
                        <div class="sub-bar-inner">
                            <div class="text-item-box">
                                     {PROGRESSBAR.map((items, index)=>{
                                        return (<div class="text-item">
                                           <h6>{items.heading}</h6> 
                                           {/* <img src = {items.image}></img> */}
                                           <img src={props.step > index ? '/images/icon1.png' : '/images/dot1.png'}/>
                                        </div>)
                                     })}
                            </div>
                                                                          
                            <hr class="sub-bar-line"></hr>

                        </div>
                    </div>
                </div>
            </section>
    </>
)
}
export default Progressbar;