import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import FormSection from "../sections/FormSection";
import Header from "../sections/Header";
import HowItWorks from "../sections/HowItWorks";

const Homepage = () => (
  <>
    <Header headings={true} />
    <FormSection />
    <HowItWorks />
    <Faq />
    <Footer />
  </>
);

export default Homepage;
