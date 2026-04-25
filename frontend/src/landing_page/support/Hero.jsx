export default function Hero() {
    return ( 
        <div className="container-fluid mt-5 mb-5" style={{backgroundColor:"rgb(56, 126, 209)", paddingLeft:"13%", paddingRight:"10%"}}>
            <div className="row">
                <div className="col">
                    <h5 className="text-start mt-5 p-5 text-white">Support Portal</h5>
                </div>
                <div className="col text-end">
                    <a href="#" className="text-white mt-5 p-5 d-inline-block">
                    Track Tickets
                    </a>
                </div>
            </div>
            <div className="row mb-5" style={{paddingBottom:"5%"}}>
                <div className="col ps-5 mb-5">
                    <p className="text-start text-white fs-4 ">
                        Search for an answer or browse help topics to create a ticket
                    </p>
                    <input placeholder="Eg: how do I activate F&O, why is my order getting rejected…" 
                    style={{width:"100%", height:"50%", borderRadius:"2%"}} />
                    <a href="" className="text-white" style={{paddingLeft:"2%"}}>Track account opening</a> &nbsp;&nbsp;
                    <a href="" className="text-white" style={{paddingLeft:"2%"}}>Track segment activation</a> &nbsp;&nbsp;
                    <a href="" className="text-white" style={{paddingLeft:"2%"}}>Intraday margins</a> &nbsp;
                    <a href="" className="text-white mb-5" style={{paddingLeft:"2%"}}>Kite user manual</a>
                </div>
                <div className="col ps-5">
                    <h3 className="text-white ps-5">Featured</h3>
                    <a className="ps-5 text-white" style={{paddingLeft:"5%"}}>1.Current Takeovers and Delisting – January 2024</a><br/>
                    <a className="ps-5 text-white" style={{paddingLeft:"2%"}}>2.Latest Intraday Leverages – MIS & CO</a>
                </div>
            </div>
        </div>
    );
}


