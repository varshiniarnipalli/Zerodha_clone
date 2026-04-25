import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

export default function HomePage() {
    return ( 
        <>
            <Hero/>
            <LeftSection 
            img_URL="/media/kite.png" 
            title="Kite" 
            description="Our ultra-fast flagship trading platform with streaming market data, 
                advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly 
                on your Android and iOS devices." 
            link1="Try Demo ->" 
            link2="Learn more ->" 
            link3="/media/googlePlayBadge.svg" 
            link4="/media/appstoreBadge.svg"/>
            <RightSection 
            img_URL="/media/console.png" 
            title="Console" 
            description="The central dashboard for your Zerodha account. Gain insights into your 
            trades and investments with in-depth reports and visualisations." 
            link1="Learn more ->" />
            <LeftSection 
            img_URL="/media/coin.png" 
            title="Coin" 
            description="Buy direct mutual funds online, commission-free, delivered directly to your 
                Demat account. Enjoy the investment experience on your Android and iOS devices." 
            link1="Coin ->" 
            link2="" 
            link3="/media/googlePlayBadge.svg" 
            link4="/media/appstoreBadge.svg"/>
            <RightSection 
            img_URL="/media/kiteconnect.png" 
            title="Kite Connect API" 
            description="Build powerful trading platforms and experiences with our super simple HTTP/JSON 
            APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
            link1="Kite Connect ->  "/>
            <LeftSection 
            img_URL="/media/varsity.png" 
            title="Varsity mobile" 
            description="An easy to grasp, collection of stock market lessons with in-depth coverage and 
            illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            // link1="" 
            // link2="" 
            link3="/media/googlePlayBadge.svg" 
            link4="/media/appstoreBadge.svg"/>
            <p className="text-center fs-5 mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </>
     );
}