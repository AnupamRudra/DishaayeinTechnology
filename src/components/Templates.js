import React from 'react';

export default function Templates() {
    return (
        <>
            <div className="templateBox">
                <div className="container">
                    <h1>Prebuild Templates</h1>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="container templates">
                                    <div className="card">
                                        <img src="assets/img/Visiting-Sample-1.png" className="card-img-top" alt="..."/> 
                                        <img src="assets/img/Visiting-Sample-2.png" className="card-img-top" alt="..."/>   
                                        <img src="assets/img/Visiting-Sample-3.png" className="card-img-top" alt="..."/>   
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="container templates">
                                    <div className="card">
                                        <img src="assets/img/Visiting-Sample-4.png" className="card-img-top" alt="..."/> 
                                        <img src="assets/img/Visiting-Sample-5.png" className="card-img-top" alt="..."/>   
                                        <img src="assets/img/Visiting-Sample-6.png" className="card-img-top" alt="..."/>   
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="container templates">
                                    <div className="card">
                                        <img src="assets/img/Visiting-Sample-7.png" className="card-img-top" alt="..."/> 
                                        <img src="assets/img/Visiting-Sample-8.png" className="card-img-top" alt="..."/>   
                                        <img src="assets/img/Visiting-Sample-9.png" className="card-img-top" alt="..."/>   
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="container templates">
                                    <div className="card">
                                        <img src="assets/img/Visiting-Sample-10.png" className="card-img-top" alt="..."/> 
                                        <img src="assets/img/Visiting-Sample-11.png" className="card-img-top" alt="..."/>   
                                        <img src="assets/img/Visiting-Sample-12.png" className="card-img-top" alt="..."/>   
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="container templates">
                                    <div className="card">
                                        <img src="assets/img/Visiting-Sample-13.png" className="card-img-top" alt="..."/> 
                                        <img src="assets/img/Visiting-Sample-14.png" className="card-img-top" alt="..."/>   
                                        <img src="assets/img/Visiting-Sample-15.png" className="card-img-top" alt="..."/>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
