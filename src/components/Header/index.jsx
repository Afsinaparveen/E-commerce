
import React from "react";
import { useState } from "react";
import { LOGO } from '../../utils/index'
import { LOGIN } from '../../utils/index'
import { CART } from "../../utils/index";

import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header() {

    return (
        <>
            <div className="main-div">

                <div className="nav-bar">
                    <div className="container">
                        <div className="top-nav">

                            <div className="logo">
                                {LOGO.map((items) => {
                                    return (
                                        <>
                                            <a href={items.url}>
                                                <img src={items.image}></img>
                                            </a>
                                        </>

                                    )
                                })}
                            </div>
                            <div className="search">
                                <input type="text" placeholder="Search.."></input>
                            </div>
                            <div className="icons">
                                <a href="/login"><FontAwesomeIcon icon={faUser} /></a>
                                <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                
                            </div>

                            {LOGIN.map((items) => {
                                return (
                                    <div className="login-button">
                                        <a href={items.url}>
                                            <button>{items.button}</button>
                                        </a>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                {/* <hr className="nav-hr"></hr> */}
            </div>
        </>
    )
}
export default Header;