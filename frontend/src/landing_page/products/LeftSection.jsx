export default function LeftSection({img_URL, title, description, link1, link2, link3, link4}) {
    return ( 
        <div className="row mt-5 mb-5">
            <div className="col-6  " style={{paddingLeft:"15%"}}>
                <img src={img_URL} alt={title} className="img-fluid mb-3" />
            </div>
            <div className="col-6 text-left mt-5" style={{paddingRight:"13%", paddingLeft:"10%", lineHeight:"2"}}>
                <h3>{title}</h3>
                <p className="">{description}</p>
                <div>
                    <a href={link1} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>{link1}</a>
                    
                    <a href={link2} target="_blank" rel="noopener noreferrer" className="ms-5" style={{textDecoration:"none"}}>{link2}</a>
                </div>
                <br/>
                <div>
                    <img src={link3} target="_blank" rel="noopener noreferrer" alt={link3} />
                    &nbsp;&nbsp;
                    <img src={link4} target="_blank" rel="noopener noreferrer" alt={link4} />
                </div>
            </div>
        </div>
    );
}
