import Header from "../header";
import Main from "../main";
import About from "../about";
import FeatureProperties from "../feature-properties";
import ContactUs from "../contact-us";
import Testimonials from "../testimonials";
import Footer from "../footer";
import TeamMember from "../team-member";
import Pricing from "../pricing";
import HowItWorks from "../how-it-works";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <HowItWorks />
            <FeatureProperties />
            <Pricing />
            <About />
            <ContactUs />
            <Testimonials />
            <TeamMember />
            <Footer />
        </>
    );
}