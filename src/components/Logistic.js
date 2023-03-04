import React from 'react'
import { Link } from 'react-router-dom'

export default function logistic(props) {
    return (
        <div>
                <section id="call-to-action" className="call-to-action">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1>{props.section}</h1>
                            <Link className="cta-btn" to={`${props.link}`}>{props.button}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
