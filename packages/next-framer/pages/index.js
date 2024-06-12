// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

// import data
import * as data from '../data.json'
const {headerData, heroData, navData, faqData, aboutData, howData, testimonialData, footerData} = data
const Home = ({headerData, heroData, navData, faqData, aboutData, howData, testimonialData, footerData}) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} navData={navData}/>
      <About aboutData={aboutData}/>
      <How howData={howData}/>
      <Faq faqData={faqData}/>
      <Testimonials testimonialData={testimonialData}/>
      <Footer footerData={footerData}/>
      <Copyright />
      <div className='h-[2000px]'></div>
    </div>
  );
};

// get data.json
export function getStaticProps() {
  return {
    props: {
      headerData, heroData, navData, faqData, aboutData, howData, testimonialData, footerData
    }
  }
}
export default Home;
