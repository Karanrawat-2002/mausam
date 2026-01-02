import "./index.css"
import Weather from "./component/weather"
import Content from "./component/content";
import {useState, useEffect} from "react"
import Navbar from "./component/navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./component/about"
function App() {

const [city, setCity]=useState("");

const [data, setData]=useState({
  temp:null,
  name:"",
  humidity:null,
  pressure:null,
  feels_like:null,
  country:"",
  wind_speed:null,
  sunrise:null,
  sunset:null,
  visibility:null,
  date:"",
  time:"",
  sky:"",
  high:null,
  low:null
})

const [error, setError]=useState('');

const apiKey = "3e5db6682ed045a742d64cb6d31be584"; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecast =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`



async function getWeather(city) {
  try {
    const response = await fetch(url);
    
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
 
    // console.log(forecastData)
    const acctualDate=new Date((data.dt ) * 1000).toLocaleDateString();
    const sunrise= new Date((data.sys.sunrise )*1000).toLocaleTimeString();
    const sunset= new Date((data.sys.sunset )*1000).toLocaleTimeString();
    const currentTime = new Date((data.dt )*1000).toLocaleTimeString();
    setData({
      temp : data.main.temp,
      name : data.name,
      humidity : data.main.humidity,
      pressure : data.main.pressure,
      feels_like : data.main.feels_like,
      country : data.sys.country,
      wind_speed : data.wind.speed,
      sunrise : sunrise,
      sunset : sunset,
      visibility : data.visibility,
      date:acctualDate,
      time:currentTime,
      sky:data.weather[0].main,
      high:data.main.temp_max,
      low:data.main.temp_min
    })
  } catch (error) {
    const message=error.message;
    const err = document.getElementById("errorBox")
    if(message.includes("404")){
       err.innerText="Place not found! please check spelling";
    }else{
      err.innerText="something went wrong!"
    }
     setTimeout(()=>{
          err.innerText=""
      }, 3000);
  } 
}



useEffect(()=>{
    const getInitialData = async ()=>{
      try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=kushinagar&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
      const acctualDate=new Date((data.dt ) * 1000).toLocaleDateString();
    const sunrise= new Date((data.sys.sunrise )*1000).toLocaleTimeString();
    const sunset= new Date((data.sys.sunset )*1000).toLocaleTimeString();
    const currentTime = new Date((data.dt )*1000).toLocaleTimeString();
    setData({
      temp : data.main.temp,
      name : data.name,
      humidity : data.main.humidity,
      pressure : data.main.pressure,
      feels_like : data.main.feels_like,
      country : data.sys.country,
      wind_speed : data.wind.speed,
      sunrise : sunrise,
      sunset : sunset,
      visibility : data.visibility,
      date:acctualDate,
      time:currentTime,
      sky:data.weather[0].main,
      high:data.main.temp_max,
      low:data.main.temp_min
    })
      }catch (error) {
         document.getElementById("errorBox").innerText=error.message;

      } 
  }
  getInitialData();
},[])

return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div className='main h-[100%]'>
            <Weather/>
            <div className='mainhero h-[10%]'>
                <form action={getWeather} className="form" >
                  <div className='searchBar backdrop-blur-md bg-white/20 rounded-2xl'>
                      <input type="text" 
                      placeholder="search place.." 
                      className='input'
                      name='city'
                      value={city}
                      onChange={(e)=>{ setCity(e.target.value) }} 
                      required/>
                      <button type='submit' ><i class="fa-solid fa-magnifying-glass text-2xl text-white"></i></button>
                  </div>
                  <div id="errorBox"></div>
                </form>
            </div>
           <Content {...data}/>
         </div>  }/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}


export default App;
