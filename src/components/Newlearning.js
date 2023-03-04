import React from 'react'

export default function Newlearning() {
    return (
        <div>

            <section id="learing" className="learning pt-0">
                <div className="container">

                    <div className="row gy-4" text-align="center">
                        <div className="col-lg-7 position-relative align-self-start order-lg-last order-first">
                            <div className="learningBox">
                                <img src="assets/img/business-learn.png"/>
                            </div>
                        </div>
                        <div className="col-lg-5 order-last order-lg-first">
                            <h1>What is this ?</h1>
                            <div class="row"  style={{display:'block'}}>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="card">
                                        <i class="fa fa-brands fa-youtube"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Collection of best YouTube business training Videos</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <i class="fa fa-solid fa-list"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Categorize contents for logistics and transport industry</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
