import React from 'react'

import Section from './Section'
import Templates from './Templates'
import Review from './Review'
import Logistic from './Logistic'

export default function BusinessCard() {
    return (
        <div>
                <Section section="Smart way to create your identity with vCard" link="https://app.dishaayein.com/BCard/Home" para="Dishaayein vCard is an electronic business card, which is stored in a digital format. It can be shared electronically, typically via email or text message.
" button="Get Started For Free"/>
                <Templates/>
                <Review/>
                <Logistic section="Share your card with your friends and cutomers" link="https://app.dishaayein.com/BCard/Home" button="Get Started"/>
        </div>
    )
}
