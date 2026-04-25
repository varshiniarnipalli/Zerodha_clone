import { Link } from "react-router-dom";

export default function Footer() {
    return ( 
        <footer className="bg-light border-top">
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <img src="media/logo.svg" style={{ width:"50%" }} ></img>
                    <p className="text-muted small mt-2">© 2023 Zerodha. All rights reserved.</p>
                </div>
                <div className="col">
                    <p>Account</p>
                    <Link to="" className="text-decoration-none text-dark">Open demat account</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Minor demat account</Link><br />
                    <Link to="" className="text-decoration-none text-dark">NRI demat account</Link><br />
                    <Link to="" className="text-decoration-none text-dark">HUF demat account</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Commodity</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Dematerialisation</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Fund transfer</Link><br />
                    <Link to="" className="text-decoration-none text-dark">MTF</Link><br />
                </div>
                <div className="col">
                    <p>Support</p>
                    <Link to="" className="text-decoration-none text-dark">Contact us</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Support portal</Link><br />
                    <Link to="" className="text-decoration-none text-dark">How to file a complaint?</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Status of your complaints</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Bulletin</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Circular</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Z-Connect blog</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Downloads</Link>
                </div>
                <div className="col">
                    <p>Company</p>
                    <Link to="" className="text-decoration-none text-dark">About</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Philosophy</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Press & media</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Careers</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Zerodha Cares (CSR)</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Zerodha.tech</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Open source</Link><br />
                    <Link to="" className="text-decoration-none text-dark">Referral program</Link>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className="text-muted mt-5 text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI 
                        Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
                        – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., 
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, 
                        Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking 
                        please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you 
                        carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p className="text-muted text-start " style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Procedure to file a complaint on SEBI SCORES: Register 
                        on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile
                         Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Smart Online Dispute Resolution | Grievances Redressal 
                        Mechanism
                    </p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
                    <p className="text-muted text-start" style={{fontSize:"10px", paddingLeft:"20px", paddingRight:"30px"}}>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
                </div>
            </div>
        </div>
        </footer>
     );
}