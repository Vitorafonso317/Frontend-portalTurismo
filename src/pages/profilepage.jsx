import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Profile from "../components/profile";

const Profilepage =() =>{
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div>
            <Profile/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default Profilepage;