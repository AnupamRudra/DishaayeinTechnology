import React from 'react'

export default function Transport() {
    return (
        <div>
                <section className="transport pt-0" id="transport">
                    <div className="container">
                        <div className="row gy-4" text-align="center">
                            <div className="col-lg-6 content order-first order-lg-first">
                                <div className="containBox">
                                    <img src="assets/img/mobile-learning.png"/>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative align-self-start order-lg-last order-last">
                                <h1><b>Transport & Logistics learning content</b></h1>

                                <div className="blockCell"> 
                                    <ul className="elementor-icon-list-items" style={{fontSize:'20px'}}>
                                        <li className="elementor-icon-list-item">
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Post your loads</span>
                                        </li>
                                        <li className="elementor-icon-list-item">         
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Find market load</span>
                                        </li>
                                        <li className="elementor-icon-list-item">            
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Post your lorry</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Hire market lorry</span>
                                        </li>
                                        <li className="elementor-icon-list-item">            
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Post your lorry</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <i class="fa fa-check"></i>
                                            <span className="elementor-icon-list-text">Hire market lorry</span>
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
