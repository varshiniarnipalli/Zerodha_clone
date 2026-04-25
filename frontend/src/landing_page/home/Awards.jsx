export default function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/largestBroker.svg" alt="Awards" className="img-fluid " ></img>
                </div>
                <div className="col-6">
                    <h1>Largest Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India 
                        daily by trading and investing in:</p>
                    <ul>
                        <div className="row mt-4" >
                            <div className="col-6">
                                <li className="mb-2">Futures and Options</li>
                                <li className="mb-2">Commodity derivatives</li>
                                <li className="mb-2">Currency derivatives</li>

                            </div>
                            <div className="col-6">
                                <li className="mb-2">Stocks & IPOs</li>
                                <li className="mb-2">Direct mutual funds</li>
                                <li className="mb-2">Bonds and Govt. securities</li>

                            </div>
                        </div>
                    </ul>
                    <img src="media/pressLogos.png" alt="Press Logos" className="img-fluid" style={{width: '80%'}}></img>
                </div>
            </div>
        </div>
     );
}