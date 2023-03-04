import React from 'react'

export default function Featured() {
    return (
        <div className="featured-service">

            <section id="featured-services" className="featured-services">
                <div className="container">
                    <h1 className="works">How it Works</h1>

                    <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 service-item d-flex ">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
                        <div>
                        <h4 className="title">Bidding</h4>
                        <p className="description" align= "justify">Truckers can search for available loads, post their availability, and place bids on loads they are interested in.</p>
                        <a href="service-details.html" className="readmore stretched-link"><span>Bid Now</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 service-item d-flex " data-aos-delay="100">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
                        <div>
                        <h4 className="title">Lorry Market</h4>
                        <p className="description" align= "justify">It is a platform where truckers can find loads, post loads, and find information on rates, carriers, and other services.</p>
                        <a href="service-details.html" className="readmore stretched-link"><span>View Market</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 service-item d-flex " data-aos-delay="200">
                        <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <div>
                        <h4 className="title">Load Market</h4>
                        <p className="description" align= "justify">Load Market is a digital marketplace for shippers, brokers, and carriers to facilitate the exchange of freight.</p>
                        <a href="service-details.html" className="readmore stretched-link"><span>View Market</span><i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    </div>

                </div>
            </section>
        
        </div>
    );
}
