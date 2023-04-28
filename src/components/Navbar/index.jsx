import React from "react";
import { useState, useEffect } from "react";
import { NAVBARS } from "../../utils";

function Navbar() {

    const [navBar, setnavBar] = useState();

    useEffect(() => {
        const navbarFetch = async () => {
            const response = await fetch(`https://firestore.googleapis.com/v1/projects/e-commerce-5d6b7/databases/(default)/documents/categories`);
            const data = await response.json();
            setnavBar(data?.documents)
        }
        navbarFetch()
    }, [])
    return (
        <>
            <div class="bottom-nav">
                <div className="container">
                    <div className="main">
                        {navBar && navBar?.length != 0 && navBar.map((items) => {
                            return (<ul className="top">
                                <li><a href={`/offers?id=${items?.fields?.id?.stringValue}`}>{items?.fields?.name?.stringValue}</a></li>
                            </ul>)
                        }                        
                        )
                        }
                    </div>
                    {/* <div className="main"> 
                        { NAVBARS.map((items) => {
                            return (<ul className="top">
                                <li><a href={items.URL}>{items.path}</a></li>
                            </ul>)
                        }
                        )
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar;