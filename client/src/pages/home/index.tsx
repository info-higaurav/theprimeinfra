import Header from "../header";
import Main from "../main";
import FeatureProperties from "../feature-properties";
import HowItWorks from "../how-it-works";
import Pricing from "../pricing";
import About from "../about";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <HowItWorks />
            <FeatureProperties />
            <Pricing />
            <About />
        </>
    );
}