import React from 'react'

export default function About() {
    return (
        <div>

            <section id="about" className="about pt-0">
                <div className="container">

                    <div className="row gy-4" text-align="center">
                        <div className="col-lg-6 col-sm-4 position-relative align-self-start order-lg-last order-1" style={{width:'auto', marginLeft:'auto'}}>
                            <div className="containBox">
                                <img src="assets/img/lorry-market.png"/>
                            </div>
                            <div className="containBox">
                                <img src="assets/img/Loadboard.png"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 content order-last  order-lg-first">
                            <h1><b>Load & Lorry Market PAN India</b></h1>
                            <p>Dishaayein Loadboard is logistics platform that helps connect commercial trucking companies, freight brokers, and shippers. Trucking companies can search for loads and post their available trucks, while freight brokers and shippers can post their available loads and search for trucks.</p>

                            <div className="blockCell"> 
                                <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                        <i class="fa fa-check"></i>
                                        <span className="elementor-icon-list-text"><b>Post your loads</b></span>
                                    </li>
                                    <li className="elementor-icon-list-item">         
                                        <i class="fa fa-check"></i>
                                        <span className="elementor-icon-list-text"><b>Find market load</b></span>
                                    </li>
                                </ul>
                                <ul className="elementor-icon-list-items mx-5">
                                    <li className="elementor-icon-list-item">            
                                        <i class="fa fa-check"></i>
                                        <span className="elementor-icon-list-text"><b>Post your lorry</b></span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                        <i class="fa fa-check"></i>
                                        <span className="elementor-icon-list-text"><b>Hire market lorry</b></span>
                                    </li>
                                </ul>    
                            </div>
                            <button type="button" className="btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )
}
