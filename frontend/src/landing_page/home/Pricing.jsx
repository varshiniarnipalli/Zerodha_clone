import { Link } from "react-router-dom";
export default function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4 p-4 ">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India.
                         Flat fees and no hidden charges.
                    </p>
                    <Link to="" className="p-2" style={{textDecoration: 'none'}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row border">
                        <div className="col border-end p-5">
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col p-5">
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}