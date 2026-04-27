import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function NotFound() {
    return ( 
        <>
            <h1 className="text-center mt-5 " style={{paddingTop:"150px", paddingBottom:"150px"}}>404 Page Not Found</h1>
            <p className="text-center  mb-5">Sorry, the page you are looking for does not exist.</p>
        </>
    );
}
