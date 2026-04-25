import { Link } from "react-router-dom";

export default function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.svg" alt="Awards" className="img-fluid ps-3" ></img>
                </div>
                <div className="col-6 mt-5 pe-5">
                    <h4>Free and open market education</h4>
                    <p>Varsity, the largest online stock market education book in the world
                         covering everything from the basics to advanced trading.
                    </p>
                    <Link to="" className="mb-5" style={{textDecoration: 'none'}}>Varsity
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>

                    <p className="mt-4">TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries.
                    </p>
                    <Link to="" className="" style={{textDecoration: 'none'}}>TradingQ&A
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                    
                </div>
            </div>
        </div>
     );
}