import Header from "./pages/header";
import Home from "./pages/home";
import About from "./pages/about";
import FeatureProperties from "./pages/feature-properties";
import ContactUs from "./pages/contact-us";
import Testimonials from "./pages/testimonials";
import Footer from "./pages/footer";
import TeamMember from "./pages/team-member";
import Pricing from "./pages/pricing";
import HowItWorks from "./pages/how-it-works";
export default function App() {
  return (
    <>
      <Header />
      <Home />
      <HowItWorks />
      <FeatureProperties />
      <Pricing />
      <About />
      <ContactUs />
      <Testimonials />
      <TeamMember />
      <Footer />
    </>
  )
}
