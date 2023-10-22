import { ThemeProvider } from "styled-components";
import "./styles/App.css";
import { theme } from "./styles/themeStyles";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HowItWorks from "./sections/HowItWorks";
import Faq from "./sections/Faq";
import FormSection from "./sections/FormSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FormSection />
      <HowItWorks />
      <Faq />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
