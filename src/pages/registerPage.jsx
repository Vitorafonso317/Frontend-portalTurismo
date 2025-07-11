import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RegisterForm from "../components/registerForm";


const RegisterPage =() =>{
    return(
        <>
        
        <div
            className="flex flex-col min-h-screen bg-cover bg-center"
           
        >
            <Navbar />
            <div>
                  <RegisterForm/>       
            </div>
            <Footer />
        </div>
        </>
    )
}

export default RegisterPage;