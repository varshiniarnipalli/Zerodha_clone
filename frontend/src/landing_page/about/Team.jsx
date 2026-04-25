import {Link} from "react-router-dom";

export default function Team() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <h3 className="text-center mt-5 mb-5">People</h3>
                <div className="col-6">
                    <img src="/media/nithinKamath.jpg" 
                        className="d-block mx-auto" 
                        style={{borderRadius:"100%", width:"50%"}}>
                    </img>
                    <h5 className="text-center mt-3">Nithin Kamath</h5>
                    <p className="text-center">Founder, CEO</p>
                </div>
                <div className="col-6">
                    <p className="pe-5 " style={{lineHeight:"30px"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he 
                        faced during his decade long stint as a trader. Today, Zerodha has changed 
                        the landscape of the Indian broking industry.
                    </p>
                    <p className="pe-5" style={{lineHeight:"30px"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) 
                        and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="pe-5">Playing basketball is his zen.</p>
                    <p>Connect on <Link to="/" style={{textDecoration:"none"}}>Homepage</Link> / <Link to="/" style={{textDecoration:"none"}}>TradingQnA</Link> / <Link to="/" style={{textDecoration:"none"}}>Twitter</Link></p>
                </div>
            </div>
        </div>
    );
}