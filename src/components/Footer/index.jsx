import React from "react";
import { useState } from "react";
import { ABOUT } from "../../utils";
import { HELP } from "../../utils";
import { SOCIAL } from "../../utils";

function Footer() {

    return (
        <>
            <div class="footer">
                <div className="container">
                    <div class="row">
                        <div className="footer-col">
                            <h4>ABOUT</h4>
                            {ABOUT.map((items) => {
                                return (<ul>
                                    <li><a href={items.URL}>{items.path}</a></li>
                                </ul>)
                            }
                            )
                            }
                        </div>
                        <div className="footer-col">
                            <h4>HELP</h4>
                            {HELP.map((items) => {
                                return (<ul>
                                    <li><a href={items.URL}>{items.path}</a></li>
                                </ul>)
                            }
                            )
                            }
                        </div>
                        <div className="footer-col">
                            <h4>SOCIAL</h4>
                            {SOCIAL.map((items) => {
                                return (<ul>
                                    <li><a href={items.URL}>{items.path}</a></li>
                                </ul>)
                            }
                            )
                            }
                        </div>
                        <div className="footer-col">
                            <h4>Mail us:</h4>
                            <ul>
                                <li><a href="#">Shopindeed Internet Private Limited</a></li>
                                <li><a href="#">Buildings Alyssa, Begonia &
                                </a></li>
                                <li><a href="#">Clove Bathery Village,
                                </a></li>
                                <li><a href="#">Clove Bathery Village,
                                </a></li>
                                <li><a href="#">Kochi, 560103, Bangalore, India</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className="copyright">© 2007-2022 shopindeed.com
                </p>
            </div>
        </>
    )

}
export default Footer;