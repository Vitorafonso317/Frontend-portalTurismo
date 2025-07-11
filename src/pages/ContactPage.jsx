import React from "react";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const ContactPage = () => {
    return (
     <>
        <div
            className="flex flex-col min-h-screen bg-cover bg-center"
           
        >
            <Navbar />
            <div>
                  <ContactForm/>      
            </div>
            <Footer />
        </div>
        </>
    );
};

export default ContactPage;
