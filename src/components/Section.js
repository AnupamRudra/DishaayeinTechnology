import React from 'react'
import { Link } from 'react-router-dom';

function Section(props) {
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="col-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2>{props.section}</h2>
                            <p style={{color: 'black', fontSize:15, fontWeight: 'bold', padding: '0px 30px'}}>{props.para}</p>
                            <Link className="btn" to={`${props.link}`}>{props.button}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section;