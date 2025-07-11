import React from "react";
import AboutHero from "../components/About";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bg4.jpg"


const AboutPage = () => {
    return (
        <>
            <div  className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}>
                <Navbar/>
                <div className="p-8 mt-16">
                <AboutHero />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default AboutPage