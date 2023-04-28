import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { RECENTLYVIEWED } from "../../utils/index"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Offers() {

    const navigate = useNavigate();

    const handleclick = (id) => {
        navigate(`/detail?id=${id}`);
    };
    let [searchParams, setSearchParams] = useSearchParams();

    const [offers, setoffers] = useState();
    const [productlist, setproductlist] = useState();
    const [categorydata, setcategorydata] = useState({});
    const [products, setproducts] = useState();

    // useeffect for title change //
    
    useEffect(() => {
        const offersList = async () => {
            const idValue = searchParams.get('id');

            const response = await axios.post(`https://firestore.googleapis.com/v1/projects/e-commerce-5d6b7/databases/(default)/documents:runQuery`,
                {
                    structuredQuery:
                    {
                        from: [
                            {
                                collectionId: 'categories'
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
            const data = response?.data[0]
            setcategorydata(data);
            console.log({ '**************************': data });
            setoffers(data?.documents)
        }
        offersList()
    }, [])

    // useffect for product list//

    useEffect(() => {
        const selectedproducts = async () => {
            const idValue = searchParams.get('id');

            const list = await axios.post(`https://firestore.googleapis.com/v1/projects/e-commerce-5d6b7/databases/(default)/documents:runQuery`,
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
                                                fieldPath: 'category'
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
            const data = list?.data

            // setproductlist(data?.documents)

            console.log({ data });
            let updatedData = data.map((a) => {
                console.log("map", a);
                return a.document.fields;
            });
            setproducts(updatedData);
            console.log('****data****', data)
        }
        selectedproducts()
    }, [])


    return (
        <>
            {console.log("searchParams", searchParams.get('id'))}

            <Header />
            <Navbar />
            <div class="heading">
                {console.log(searchParams.get('data'))}
                {console.log('categorydata', categorydata)}

                <h4>{categorydata?.document?.fields?.name?.stringValue}</h4>
            </div>
            <div class="discount-items">
                {console.log('products', products)}
                {/* {console.log('updatedData', updatedData)} */}

                {products && products?.length != 0 && products?.map((items) => {
                    console.log('**************',items)
                    return <div class="sections-2">
                        <img src={items?.image?.arrayValue?.values[0]?.stringValue} onClick={()=>handleclick(items?.id?.stringValue)}></img>
                        <p>
                            {items?.text?.stringValue}
                            {items?.offer?.stringValue}
                        </p>
                        <h5>{items?.description?.stringValue}</h5>
                        {console.log({description: items})}
                    </div>
                })}
            </div>
            {/* <div class="discount-items">
                {RECENTLYVIEWED.map((items) => {
                    return <div class="sections-2">
                        <img src={items.image}></img>
                        <p>
                            {items.title}
                            {items.content1}
                        </p>
                        <h5>{items.content2}</h5>
                    </div>
                })}
            </div> */}
            <Footer />
        </>
    )
}
export default Offers;