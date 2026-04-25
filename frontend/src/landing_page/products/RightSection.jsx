export default function RightSection({img_URL, title, description, link1}) {
    return ( 
        <div className="row mt-5 mb-5">
            <div className="col-6 text-left mt-5" style={{paddingLeft:"15%", paddingRight:"10%", lineHeight:"2"}}>
                <h3>{title}</h3>
                <p className="">{description}</p>
                <div>
                    <a href={link1} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>{link1}</a>
                </div>
            </div>
            <div className="col-6  " style={{paddingRight:"15%"}}>
                <img src={img_URL} alt={title} className="img-fluid mb-3 " />
            </div>
        </div>
    );
}
