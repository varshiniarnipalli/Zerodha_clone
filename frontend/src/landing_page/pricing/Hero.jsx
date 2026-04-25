export default function Hero() {
    return ( 
        
        <div className="container mt-5 mb-5 border-bottom">
            <div className="row mt-5">
                <div className="col text-center mt-5 lh-lg">
                    <h2 className="mt-5 lh-lg">Pricing</h2>
                    <p className="lh-lg mt-3 mb-1" style={{paddingBottom:"50px"}}>Free equity 
                        investment and flat 20 traday and F&O trades</p>

                </div>
                
            </div>   
            <div className="row mt-5" style={{paddingLeft:"9%", paddingRight:"9%"}}>
                <div className="col text-center mt-5 lh-lg">
                    <img src="/media/pricing0.svg" alt="Pricing" ></img>
                    <h2 className="mt-5 lh-lg">Pricing</h2>
                    <p className="lh-lg mt-3 mb-1" style={{paddingBottom:"50px"}}>Free equity 
                        investment and flat 20 traday and F&O trades</p>
                </div>
                <div className="col text-center mt-5 lh-lg">
                    <img src="/media/intradayTrades.svg" alt="Pricing" ></img>
                    <h2 className="mt-5 lh-lg">Intraday and F&O trades</h2>
                    <p className="lh-lg mt-3 mb-1" style={{paddingBottom:"50px"}}>Flat ₹ 20 or 
                        0.03% (whichever is lower) per executed order on intraday trades across equity, currency, 
                        and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col text-center mt-5 lh-lg">
                    <img src="/media/pricing0.svg" alt="Pricing" ></img>
                    <h2 className="mt-5 lh-lg">Free direct MF</h2>
                    <p className="lh-lg mt-3 mb-1" style={{paddingBottom:"50px"}}>All direct mutual fund investments 
                        are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>         
        </div>
    );
}
