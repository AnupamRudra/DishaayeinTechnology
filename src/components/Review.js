import React from 'react'

export default function Review() {
    return (
        <>  
            <div className="review-container">
                <section className="review">
                    <div className="container" style={{ width: '64%'}}>
                        <div className="row g-0 text-center">
                            <div className="col-6 col-md-6" style={{backgroundColor:'#4233d3f5'}}>
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <span className="rating">20+</span><br/>
                                            <span className="rating-text">Latest Prebuild Templates</span>
                                        </div>
                                        <div className="carousel-item">
                                            <span className="rating">10+</span><br/>
                                            <span className="rating-text">Color Combinations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6" style={{backgroundColor:'#29ac08c7'}}>
                                <span className="rating">10K+</span><br/>
                                <span className="rating-text">Active Users</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="review">
                    <div className="container" style={{ width: '64%'}}>
                        <div className="row g-0 text-center">
                            <div className="col-4 col-md-4" style={{backgroundColor:'#7a4cd0f5'}}>
                                <span className="rating">20K+</span><br/>
                                <span className="rating-text">Downloads</span>
                            </div>
                            <div className="col-4 col-md-4" style={{backgroundColor:'#0035ff82'}}>
                                <span className="rating">50K+</span><br/>
                                <span className="rating-text">Views</span>
                            </div>
                            <div className="col-4 col-md-4 imgs" style={{backgroundImage:'url(assets/img/business2.jpg)'}}>
                                <div className="text">
                                    <span className="rating-text" style={{fontSize:'30px', marginBottom:'auto'}}><p className="px-2" style={{marginTop:'revert'}}>World Class vCard Templates</p></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
