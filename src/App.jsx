import './App.css'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Advice from './component/Advice'
import Steps from './component/Steps'
import Counter from './component/Counter'
import Flashcard from './component/Flashcard'
import SearchInput from './component/Searchinput'
import Handlescreen from './component/Handlescreen'
import Button from './component/Button'
import Sidebar from './component/Sidebar'
import Cloudinary from './component/Cloudinary'
import Cloud from './component/Cloud'
import ChartBoxUser from './component/ChartBoxUser'
import DemoCarousel from './component/DemoCarousel'
import Slider from 'react-slick'
import MyDatePicker from './component/MyDatePicker'

import Login from './component/Login'
import Logout from './component/Logout'
import {gapi} from 'gapi-script'
import { useEffect } from 'react'
import Currencyconversion from './component/Currencyconversion'



const clientId = "939523337752-cgh7jofh594cmpfa2thvco92tl5sj17o.apps.googleusercontent.com"



function App() {
  let navigate = useNavigate()
//   useEffect(() => {
//     function start(){
//       gapi.client.init({
//       clientId: clientId,
//       scope: ""
//       })
//     }
//     gapi.load('client:auth2', start)
//   }, []);

  // let accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);
  

  


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      }).then(() => {
        // Initialization successful, retrieve access token here
        const accessToken = gapi.auth.getToken().access_token;
        // console.log(accessToken); // Ensure console.log is within the scope of the retrieved data
        // Use the access token for further actions here
        // eg navigate to
      }).catch(error => {
        // console.error("Error initializing gapi: ", error);
      });
    }

    gapi.load('client:auth2', start);
  }, []);

 


  return (
    <>
    
      <Routes>
        <Route path='/advice' element={<Advice/>}/>
        <Route path='/step' element={<Steps/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/flashcard' element={<Flashcard/>}/>
        <Route path='/search' element={<SearchInput/>}/>
        <Route path='/screen' element={<Handlescreen/>}/>
        <Route path='/button' element={<Button/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/cloudinary' element={<Cloudinary/>}/>
        <Route path='/' element={<Cloud/>}/>
        <Route path='/carousel' element={<DemoCarousel/>}/>
        <Route path='/slide' element={<Slider/>}/>
        <Route path='/datepicker' element={<MyDatePicker/>}/>
        <Route path='/chart' element={<ChartBoxUser/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/currency' element={<Currencyconversion/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
