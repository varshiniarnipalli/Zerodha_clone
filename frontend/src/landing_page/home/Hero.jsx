export default function Hero() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src="media/homeHero.png" alt="Hero Image" className="img-fluid mx-auto d-block mb-5 mt-5"  style={{height: '350px'}}></img>
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="p-2 btn btn-primary mt-5 fs-5 mb-5" style={{width: '200px'}}>Sign Up for free</button>

                </div>
            </div>            
        </div>
     );
}