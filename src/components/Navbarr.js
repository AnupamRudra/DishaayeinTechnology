import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbarr() {
    // const [active, setActive] =React.useState('')
    // const Color = ( ) => {
        // return ( ) => {
            // document.getElementsByClassName('nav-link').style.Color='red';
        // }
    // }
    // const bColor = ( ) => {
    //     return ( ) => {
    //         setActive('red');
    //     }
    // }
    // const blColor = ( ) => {
    //     return ( ) => {
    //         setActive('red');
    //     }
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container navbar-dark bg-dark">
                    <Link to="/" className="logo d-flex align-items-center">
                        <h1><img src="assets/img/dishaayein-logo-white.png"/></h1>
                    </Link>
                    <button 
                        className="navbar-toggler collapsed" 
                        type="button" 
                        data-bs-toggle='collapse' 
                        data-bs-target="#navbarsExample07" 
                        aria-controls="navbarsExample07" 
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{color: 'white'}}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse align-content-end" id="navbarsExample07">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/businessCard">Business Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/businessLearning">Business Learning</Link>
                            </li>
                        </ul>
                            <form role="button">
                                <button type="submit" className="btn"><Link to="https://app.dishaayein.com/" style={{color:'white'}}>GOTO WORKSPACE</Link></button>
                            </form>
                    </div>
                </div>
            </nav>
        </>    
    )
}
