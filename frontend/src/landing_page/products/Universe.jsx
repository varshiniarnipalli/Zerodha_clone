export default function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-2">The Zerodha Universe</h1><br/>
                    <p className="text-center ">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>
            <div className="row" style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <div className="col p-5">
                    <img src="/media/zerodhaFundhouse.png" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Our asset management venture that is creating 
                        simple and transparent indexfunds to help you save for your goals.
                    </p>
                </div>
                <div className="col p-5">
                    <img src="/media/sensibullLogo.svg" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Options trading platform that lets you create 
                        strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col p-5">
                    <img src="/media/sensibullLogo.svg" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Investment research platform that offers detailed 
                        insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className="row" style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <div className="col p-5">
                    <img src="/media/streakLogo.png" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Systematic trading platform 
                        that allows you to create and backtest strategies without coding.
                    </p>
                </div>
                <div className="col p-5">
                    <img src="/media/smallcaseLogo.png" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Thematic investing platform that helps you 
                        invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col p-5">
                    <img src="/media/dittoLogo.png" style={{width:"70%"}}></img>
                    <p className="text-small text-muted mt-3">Personalized advice on life and health 
                        insurance. No spam and no mis-selling.
                    </p>
                </div>
            </div>
        </div>
    );
}
