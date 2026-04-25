import OpenAccount from "../OpenAccount.jsx";
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import Awards from "./Awards.jsx";
import Hero from "./Hero.jsx";
import Pricing from "./Pricing.jsx";
import Stats from "./Stats.jsx";
import Education from "./Education.jsx";

export default function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
     );
}