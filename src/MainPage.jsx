import Header from "./components/main/Header";
import LandingPage from "./components/main/LandingPage";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import SnsButton from "./components/SnsButton";
import AboutUsButton from "./components/AboutUsButton";
import Pvip from "./components/main/Pvip";
import Benefit from "./components/main/Benefit";
import RequiredDoc from "./components/main/RequiredDoc";
import ContactUs from "./components/main/ContactUs";
import Footer from "./components/main/Footer";
import Sidebar from "./components/main/sidebar/Sidebar";

function MainPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Sidebar />
      <LandingPage />
      <SnsButton />
      <AboutUsButton />
      <Marquee direction="left" className="marquee">
        {t("marquee.text")}
      </Marquee>

      <Pvip />
      <Benefit />
      <RequiredDoc />
      <ContactUs />

      <Footer />
    </>
  );
}

export default MainPage;
