import React from 'react'

import Section from './Section';
import Featured from './Featured';
import Logistic from './Logistic';
import About from './About';

export default function LoadingBords() {
    return (
        <div>
                <Section section="Connecting Loads with Lorry - An Easier Way to Move Freight" link="https://app.dishaayein.com/Loadboard/Load" button="Go To Loadboard"/>
                <Featured/>
                <About/>
                <Logistic section="Largest Marketplace for logistics" link="https://app.dishaayein.com/Loadboard/LorryPost" button="Get Started"/>
        </div>
    )
}
