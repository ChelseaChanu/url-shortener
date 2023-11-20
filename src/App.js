import React, { useState } from 'react';
import './App.css';
import './scss/styles.css'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import UrlShort from './components/UrlShort';
import ShortUrlCont from './components/ShortUrlCont';

function App() {
  const[urlData,setUrlData] = useState([]);

  // add new url and shorturl in the array
  const addUrlData = (url,shortUrl)=>{
    setUrlData([...urlData, {url,shortUrl}]);
  }

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <div className="main">
        <UrlShort addUrlData={addUrlData}/>
        <div className="urlContainer">
          {urlData.map((data,index)=>
            <ShortUrlCont 
              key={index}
              shortUrl={data.shortUrl} 
              longUrl={data.url}
            />
          )}
        </div>
        <Solution/>
        <Benefits/>
      </div>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
