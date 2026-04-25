import { Link } from "react-router-dom";

export default function Stats() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row mt-5 p-5">
                <div className="col-6 p-5">
                    <h3 className="mt-5 mb-5">Trust with confidence</h3>
                    <h4 className="mt-5">Customer-first always</h4>
                    <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
                         of equity investments, making us India’s largest broker; contributing to 15% 
                         of daily retail exchange volumes in India.
                    </p>
                    <h4 className="mt-5">No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
                        that you use at your pace, the way you like. Our philosophies.
                    </p>
                    <h4 className="mt-5">The Zerodha universe</h4>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you 
                        tailored services specific to your needs.
                    </p>
                    <h4 className="mt-5">Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively 
                        help you do better with your money.
                    </p>
                </div>
                <div className="col-6 text-center">
                    <img src="media/ecosystem.png" alt="Stats Image" className="img-fluid mt-5 mb-5" style={{height: '80%', width: '1100px'}}></img>
                    <Link to="" className="" style={{textDecoration: 'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                   
                    <Link to="" className="p-5" style={{textDecoration: 'none'}}>Try Kite demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>

        </div>
     );
}