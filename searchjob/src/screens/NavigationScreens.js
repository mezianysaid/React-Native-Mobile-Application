import React from "react";
import { Routes, Route } from "react-router-native";
// import {BrowserRouter} from 'react-router-dom'
import Home from './Home'
// import Welcome from "../components/home/welcome"
import JobDetails from './[id]'
const NavigationScreens = ()=>{
    return (
      
        <Routes>
            <Route path='/' exact element={<Home/>}  />
             <Route path='/job_details/:id' exact element={<JobDetails/>} />
            {/* // <Route path="/rechargeDetails" exact element={<RechargeDetails/>}/>  */}
            <Route path='*'  element={<Home/>}  />
        </Routes>       
    )
}

export default NavigationScreens;