import React from 'react'
import Section from './Section'
import Newlearning from './Newlearning'
import Logistic from './Logistic'
import Transport from './Transport'
// import { Router, Routes, Route } from 'react-router-dom'

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";

export default function Businesslearning() {
    return (
        <div>
            {/* <Router> */}
                <Section section="This program is design to help individuals enhance their business skills." link="https://learning.dishaayein.com/" button="Get Started"/>
                <Newlearning/>
                <Transport/>
                <Logistic section="World class business training Videos from YouTube" link="https://learning.dishaayein.com/" button="Start Learning"/>
                {/* <Routes>
                    <Route exact path="/link" element={"https://learning.dishaayein.com/"}></Route>
                </Routes>
            </Router> */}
        </div>
    )
}
