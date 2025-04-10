import React from 'react';
 import Header from './components/Header'; // Import the Header
 // Import other components or styles as needed
 import './App.css'; // Or your main stylesheet
 
 import CertificatesSection from './components/CertificatesSection';
 import TestimonialsCarousel from './components/TestimonialsCarousel';
 import Contact from './components/Contact';
 import Projects from './components/Projects';
 import About from './components/About';
 import Footer from './components/Footer';
 import Home from './components/Home';
 import BlogSection from './components/BlogSection';
 
 
 function App() {
   return (
     <div className="App">
       <Header /> 
       <Home/>  
      <About/>
       <CertificatesSection/>
       <Projects/>
       {/* <TestimonialsCarousel/> */}
       <BlogSection/> 
       <Contact/>
       <Footer/>
     </div>
   );
 }
 
 export default App;